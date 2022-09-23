import DataLoaderActionTypes from "./data-loader.types";

export const setLoadingIsComplete = isComplete => ({
    type: DataLoaderActionTypes.SET_LOADING_IS_COMPLETE,
    payload: isComplete
});