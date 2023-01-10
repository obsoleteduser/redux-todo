import { reducer }  from "./reducers" 
import { combineReducers } from "redux"
import { legacy_createStore } from "redux"



const rootReducer = combineReducers({
    manipulate: reducer
})

export const store = legacy_createStore(rootReducer, )