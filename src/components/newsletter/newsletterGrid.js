import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

handleAddNewsletter = () => {
    this.props.history.push('/newsletter/new');
}

class NewsletterGrid extends Component {
    render() {

        const latest = {
            _id: '592',
            title: '',
            body: '',
            date: new Date(),
            imageUrl: ''
        }

        return (
            <div className='newsletter-grid'>
                <Button className='newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()}/>
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest history={this.props.history} {...latest}/>
            </div>
        )
    }
}