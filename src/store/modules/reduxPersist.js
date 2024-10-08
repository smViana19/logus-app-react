import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'LOGUS',
            storage,
            whitelist: ['auth', 'subject', 'material'],
        },
        reducers
    );

    return persistedReducers;
};
