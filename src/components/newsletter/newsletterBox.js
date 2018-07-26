import React, { Component } from 'react';
import { connect } from 'react-redux';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class NewsletterBox extends Component {
    render() {
        const { date } = this.props;
        if(!date) {
            return <div>...Fetching Newsletters</div>
        }
        return (
            <div className='newsletter-box'>
                <div className='newsletter-box__day'>{props.date.getDate()}</div>
                <div classname='newsletter-box__month-year'>{months[props.date.getMonth()]} {props.date.getFullYear()}</div>
                <div className='newsletter-box__point'></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { newsletters } = state.newsletters;
    const latestNewsletter = newsletters[0];
    return {
        ...latestNewsletter
    }
}

export default connect(mapStateToProps)(NewsletterBox);