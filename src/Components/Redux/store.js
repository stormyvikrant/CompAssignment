import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux"


import {MealReducer} from "./Actions_All/reducer"

import thunk from "redux-thunk"

const mainReducer =combineReducers({MealReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)));

export {store};
