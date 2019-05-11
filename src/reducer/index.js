import { AMOUNT_DATA_TO_STORE } from '../constants';
const defaultValue = {
    post: '',
    comments:[]
}

const reducer = (state=defaultValue, action) => {
    switch (action.type) {
        case AMOUNT_DATA_TO_STORE:
            return Object.assign({}, state, { comments:action.data });
        default:
            return state;
    }
}

export default reducer;