import DataLoaderActionTypes from "./data-loader.types";

const INITIAL_STATE = {
    loadingIsComplete: false
};

const DataLoaderReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case DataLoaderActionTypes.SET_LOADING_IS_COMPLETE:
            return {
                ...state,
                loadingIsComplete: action.payload
            };
        default:
            return state;
    }
}

export default DataLoaderReducer;