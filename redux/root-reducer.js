import { combineReducers } from "redux";
import homePageHandlerReducer from "./homepage-handler/homepage-handler.reducer";
import dataLoaderReducer from "./data-loader/data-loader.reducer";

const rootReducer = combineReducers({
    'homePageHandler': homePageHandlerReducer,
    'dataLoader': dataLoaderReducer
});

export default rootReducer;