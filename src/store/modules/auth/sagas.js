import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import * as actions from './actions'
import * as types from '../types'
import axios from '../../../../services/axios'; 
import history from '../../../../services/history'; 
import { toast } from 'react-toastify';


function* loginRequest({ payload }) {
    try {
        const response = yield call(axios.post, '/tokens', payload)
        yield put(actions.loginSucess({ ...response.data }));

        toast.success('Voce fez login');
        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        history.push(payload.prevPath)
    } catch(e) {
        const errorMessage = e.response?.data?.errors?.[0] || 'Usuário ou senha inválidos.';
        toast.error(errorMessage);
        yield put(actions.loginFailure());
    }
}

function* persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');
    if(!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
]);