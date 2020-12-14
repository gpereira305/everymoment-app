import cuid from 'cuid';
import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import SelectInput from '../../../app/common/form/SelectInput';
import TextArea from '../../../app/common/form/TextArea';
import TextInput from '../../../app/common/form/TextInput';
import DateInput from '../../../app/common/form/DateInput';
import {createEvent, updateEvent} from '../eventActions';




const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {}

  if(eventId && state.events.length > 0){
     event = state.events.filter(event => 
      event.id === eventId)[0]
  }

  return {
    initialValues: event
  }
}



const actions = {
  createEvent, updateEvent
}



const validate = combineValidators({
  title: isRequired({message: 'The event is required'}),
  category: isRequired({message: 'The category is required'}),
  description: composeValidators(
    isRequired({message: 'Please, enter a description'}),
    hasLengthGreaterThan(4)({
      message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})




const category = [
    {key: 'drinks', text: 'Bebidas', value: 'drinks'},
    {key: 'culture', text: 'Cultural', value: 'culture'},
    {key: 'film', text: 'Filme', value: 'film'},
    {key: 'food', text: 'Comida', value: 'food'},
    {key: 'music', text: 'Música', value: 'music'},
    {key: 'travel', text: 'Viagem', value: 'travel'},
];

class EventForm extends Component {

  onFormSubmit = (values) => {
  
    if(this.props.initialValues.id){
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`) 
    }else{
      const newEvent = {
        ...values,
         id: cuid(),
         hostPhotoURL: '/assets/user.png',
         hostedBy: 'Sierra'
      }
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`) 
    }
  } 



  render() {  
    const {
      history, 
      initialValues,
      invalid,
      submitting,
      pristine 
     } = this.props;

    return (

          <Grid>
            <Grid.Column width={10}>
            <Segment>
              <Header sub color='blue' content='Event Details'/>
                <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>

                  <Field
                    name='title'
                    component={TextInput}
                    placeholder='Give you event a name'
                  /> 
                    <Field
                    name='category'
                    component={SelectInput}
                    options={category}
                    placeholder='What is your event about?'
                  />
                    <Field
                    name='description'
                    component={TextArea}
                    rows={3}
                    placeholder='Tell us about your event'
                  /> 
                  <Header sub color='blue' content='Event Location Details'/>

                   <Field
                    name='city'
                    component={TextInput}
                    placeholder='Event City'
                  /> 
                   <Field
                    name='venue'
                    component={TextInput}
                    placeholder='Event Venue'
                  />
                  <Field
                    name="date"
                    component={DateInput}
                    dateFormat='dd LLL yyyy h:mm a'
                    showTimeSelect
                    timeFormat="HH:mm"
                    placeholder="Event Date"  
                  /> 
        
                  <Button 
                     positive
                     type="submit"
                     disabled={invalid ||
                     submitting || pristine}
                   >
                    Submit
                  </Button>

                  <Button 
                    type="button"
                    onClick={
                      initialValues.id ? () => 
                      history.push(`/events/${initialValues.id}`)
                      : () =>  history.push('/events')
                    }>
                    Cancel
                  </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
       

    )
  }
}


export default connect(
  mapState,
  actions
  )(reduxForm({form: 'eventForm', validate })(EventForm));
