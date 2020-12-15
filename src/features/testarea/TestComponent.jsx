import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import {incrementAsync, decrementAsync } from './testActions';
import {openModal} from '../modals/modalActions';



const mapState = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
});


const actions = {
    incrementAsync,
    decrementAsync,
    openModal
}


class TestComponent extends Component {
    render() {
        const { incrementAsync, 
                decrementAsync, 
                openModal, 
                loading,
                buttonName
             } = this.props;

        return (
            <div>
                <h1>Test Component</h1>
                <h3>A resposta é: {this.props.data}</h3>
                <Button
                  name='increment'
                  loading={buttonName === 'increment' && loading} 
                  onClick={(e) => 
                    incrementAsync(e.target.name)}
                  positive content='Increment'    
                />
                <Button
                  name='decrement'
                  loading={buttonName === 'decrement' && loading} 
                  onClick={(e) => 
                    decrementAsync(e.target.name)} 
                  negative content='decrement'
                />
                <Button
                  
                   onClick={() => 
                   openModal('TestModal', { data: 42 })} 
                   color='teal'
                   content='Open Modal'

                />
            </div>
        )
    }
}


export default connect(mapState, actions)(TestComponent)