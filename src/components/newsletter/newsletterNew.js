import react, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {
    render() {

        onSubmit = (fields) => {
            
        }

        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;