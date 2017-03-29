import {combineReducers, createStore} from "redux";
import {applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import {UIStates} from './reducers';
import thunk from "redux-thunk";

const reducers   = combineReducers({UIStates});
const middleWare = applyMiddleware(thunk, createLogger());
const store      = createStore(reducers, middleWare);

export default store;
