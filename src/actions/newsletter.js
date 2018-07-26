import {
    SET_NEWSLETTERS,
    FETCH_NEWSLETTER_ID
} from './types';

const INITIAL_STATE = {
    newsletters: []
}

export function fetchNewsletters() {
    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}

export function fetchNewslettersWithId(id) {
    return {
        type: FETCH_NEWSLETTER_ID,
        payload: id
    }
}