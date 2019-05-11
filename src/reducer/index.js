import { AMOUNT_DATA_TO_STORE } from '../constants';
const defaultValue = {
    post: '',
    url:"",
    comments:[]
}

const reducer = (state=defaultValue, action) => {
    switch (action.type) {
        case AMOUNT_DATA_TO_STORE:
            return Object.assign({}, state, {
                post: action.post,
                url: action.url,
                comments:action.comments
            });
        default:
            return state;
    }
}

export default reducer;