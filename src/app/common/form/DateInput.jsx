import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { Form, Label } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';





const DateInput = ({
    input,
    width,
    placeholder,
    meta: {touched, error}, 
    ...rest
}) => {


    return (
        <Form.Field error={touched && !!error}>
            <ReactDatePicker
                {...rest}
                placeholderText={placeholder}
                selected={input.value ?
                new Date(input.value) : null}
                onChange={input.onChange}
                onBlur={input.onBlur}
                onChangeRaw={(e) => e.preventDefault()}
            />
            {
              touched && error &&
              <Label basic color='red'>
                {error}
              </Label>
            }
        </Form.Field>
    )
}

export default DateInput;
