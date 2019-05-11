import { AMOUNT_DATA_TO_STORE } from '../constants';
import axios from 'axios';

export const getComments = (dispatch) => {
    fetch.get('./api/comments.json')
        .then(res => {
            console.log(res.data);
            dispatch(AddComments(res.data));
        });
};

export const AddComments = data => ({
    type: AMOUNT_DATA_TO_STORE,
    data
})

