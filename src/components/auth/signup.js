import React, { Component } from '../../../../../../.cache/typescript/2.9/node_modules/@types/react';
import SignupForm from './signupForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {

    onSubmit = (fields) => {
        this.props.signUp(fields, () => {
            this.props.history.push('/dashboard');
        })
    }

    render() {
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default connect(null, actions)(Signup);