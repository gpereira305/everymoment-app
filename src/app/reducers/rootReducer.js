import { combineReducers } from "redux";
import {reducer as FormReducer} from 'redux-form';
import {reducer as ToastrReducer} from 'react-redux-toastr'
import asyncReducer from "../../features/async/asyncReducer";
import authReducer from "../../features/auth/authReducer";
import eventReducer from "../../features/events/eventReducer";
import modalReducer from "../../features/modals/modalReducer";
import testReducer from "../../features/testarea/testReducer";
import { firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from 'redux-firestore';




const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer   
})



export default rootReducer;