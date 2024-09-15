import * as types from '../types';


const initialState = {
    selectedMaterialId: null,
}

const materialReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SELECT_MATERIAL':
            return{
                ...state,
                selectedMaterialId: action.payload.materialId
            }

        case 'CLEAR_MATERIAL':
            return{
                ...state,
                selectedMaterialId: null,
            }
            default:
                return state
    }
}

export default materialReducer;