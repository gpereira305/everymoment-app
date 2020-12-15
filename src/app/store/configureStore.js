import { applyMiddleware, createStore } from "redux" 
import rootReducer from "../reducers/rootReducer";
import {composeWithDevTools,} from 'redux-devtools-extension';
import thunk from "redux-thunk";




export const  configureStore = () => {
    const middlewares = [thunk]
    const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares)); 
    
    const store = createStore(rootReducer, composeEnhancer)

    return store;
}