import FETCH_POSTS from '../actions/index';

const INITAL_STATE = {
    all: [],
    post: null
};

export default function(state=INTIAL_STATE, action) {
    switch(action.type) {
        case (FETCH_POSTS):
            return action.payload;
        default:
            return state;
    }
}