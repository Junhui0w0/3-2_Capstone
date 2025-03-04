import {legacy_createStore as createStore} from "redux"
import { combineReducers } from "redux";

import counter from '../modules/counter';


const rootReducer = combineReducers({
    counter: counter,
}); 
const store = createStore(rootReducer); 

export default store;