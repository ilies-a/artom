import { combineReducers } from "redux";
import homePageHandlerReducer from "./homepage-handler/homepage-handler.reducer";
import dataLoaderReducer from "./data-loader/data-loader.reducer";
import navBarReducer from "./nav-bar/nav-bar.reducer";

const rootReducer = combineReducers({
    'homePageHandler': homePageHandlerReducer,
    'dataLoader': dataLoaderReducer,
    'navBar': navBarReducer,
});

export default rootReducer;