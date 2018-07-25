import React from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function NewsletterBox(props) {
    return (
        <div className='newsletter-box'>
            <div className='newsletter-box__day'>{props.date.getDate()}</div>
            <div classname='newsletter-box__month-year'>{months[props.date.getMonth()]} {props.date.getFullYear()}</div>
            <div className='newsletter-box__point'></div>
        </div>
    )
}