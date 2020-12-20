import { applyMiddleware, createStore } from "redux" 
import rootReducer from "../reducers/rootReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import firebase from '../config/firebase';




const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false
}

export const  configureStore = preloadedState => {
    const middlewares = [thunk.withExtraArgument({getFirebase,getFirestore})]
   


    const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares),
  
    reactReduxFirebase(firebase, rrfConfig), 
    reduxFirestore(firebase)
    );
    
    const store = createStore(rootReducer, preloadedState, composeEnhancer);

    return store;
}