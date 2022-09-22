import { combineReducers } from "redux";
import homePageHandlerReducer from "./homepage-handler/homepage-handler.reducer";

const rootReducer = combineReducers({
    'homePageHandler': homePageHandlerReducer,
});

export default rootReducer;