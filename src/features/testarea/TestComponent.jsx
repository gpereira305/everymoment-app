import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import {incrementCounter, decrementCounter } from './testActions';



const mapState = (state) => ({
    data: state.test.data
});


const actions = {
    incrementCounter,
    decrementCounter
}


class TestComponent extends Component {
    render() {
        const { incrementCounter, decrementCounter} = this.props;

        return (
            <div>
                <h1>Test Component</h1>
                <h3>A resposta é: {this.props.data}</h3>
                <Button onClick={incrementCounter} positive content='Increment'/>
                <Button onClick={decrementCounter} negative content='decrement'/>
            </div>
        )
    }
}


export default connect(mapState, actions)(TestComponent)