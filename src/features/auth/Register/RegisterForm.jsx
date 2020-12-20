
import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form'; 
import {combineValidators, isRequired} from 'revalidate';
import TextInput from '../../../app/common/form/TextInput';
import {registerUser} from '../authActions';
import { connect } from 'react-redux';
import SocialLogin from '../SocialLogin/SocialLogin';




const actions = {
  registerUser
} 

const validate = combineValidators({
  displayName: isRequired('Nome'),
  email: isRequired('Email'),
  password: isRequired('Senha')
}); 


const RegisterForm = ({
  handleSubmit,
  registerUser,
  error,
  invalid, 
  submitting
 }) => {

  return (
    <div>
      <Form
        size="large"
        onSubmit={handleSubmit(registerUser)}
        >
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          { error && <Label basic color='red'>{error}</Label>}
          <Button 
              disabled={invalid || submitting}
              fluid size="large"
              color="teal">
              Register
          </Button>
            <Divider horizontal>
              Ou
            </Divider>
            <SocialLogin/>
        </Segment>
      </Form>
    </div>
  );
};

export default connect(null, actions)
(reduxForm({form: 'registerForm', validate})(RegisterForm));