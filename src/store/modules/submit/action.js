import * as types from '../types';
import axios from 'axios';


export const selectMaterial = (materialId) => {
    return{
        type: types.SELECT_MATERIAL,
        payload: { materialId },
    }
}

export const clearMaterial = () => {
    return{
        type: types.CLEAR_SELECT_MATERIAL,
    }
}

