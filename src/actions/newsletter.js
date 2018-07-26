import {
    SET_NEWSLETTERS
} from '../actions/types';

const INITIAL_STATE = {
    newsletters: []
}

export function fetchNewsletters() {
    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}