import react, { Component } from 'react';

import SigninForm from '../auth/signinForm';

class NewNewsletter extends Component {
    render() {

        onSubmit = (fields) => {
            
        }

        return (
            <div className='new-newsletter'>
                <SigninForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;