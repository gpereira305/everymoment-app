import { combineReducers } from "redux";
import {reducer as FormReducer} from 'redux-form';
import eventReducer from "../../features/events/eventReducer";
import testReducer from "../../features/testarea/testReducer";




const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    events: eventReducer
})



export default rootReducer;