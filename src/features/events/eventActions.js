import { toastr } from "react-redux-toastr";
import { fetchSampleData } from "../../app/data/mockAPI";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncActions";
import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENTS, UPDATE_EVENT } from "./eventConstants"





export const createEvent = (event) => {
    return async dispatch => {

        try {
            dispatch({

                type: CREATE_EVENT,
                payload: {
                    event
                }
            })
            toastr.success('Event Created Successfully!');

        } catch (error) {
            toastr.error('Ooops!, Something went wrong')
            
        }
    } 
};


export const updateEvent = (event) => {
    return async dispatch => {

        try {
            dispatch({

                type: UPDATE_EVENT,
                payload: {
                    event
                }
            })
            toastr.success('Event updated Successfully!');

        } catch (error) {
            toastr.error('Ooops!, Something went wrong')
            
        }
    } 
};


export const deleteEvent = (eventId) => {
    return {

        type: DELETE_EVENT,
        payload:  {
            eventId
        }
    }
};



export const loadEvents = () => {

    return async dispatch => {

        try {
            dispatch(asyncActionStart())
            const events = await fetchSampleData();
            dispatch({type: FETCH_EVENTS, payload: {events}})
            dispatch(asyncActionFinish()) 

        } catch (error) {
            console.log(error)
            dispatch(asyncActionError())
            
        }
    }

};