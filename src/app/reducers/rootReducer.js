import { combineReducers } from "redux";
import {reducer as FormReducer} from 'redux-form';
import asyncReducer from "../../features/async/asyncReducer";
import authReducer from "../../features/auth/authReducer";
import eventReducer from "../../features/events/eventReducer";
import modalReducer from "../../features/modals/modalReducer";
import testReducer from "../../features/testarea/testReducer";




const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer
})



export default rootReducer;