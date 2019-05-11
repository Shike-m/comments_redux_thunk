import { AMOUNT_DATA_TO_STORE } from '../constants';

export const getComments = (dispatch) => {
    fetch('./api/comments.json')
        .then(res => {
            return res.json();
        }).then(res => {
            console.log(res);
            dispatch(AddComments(res.data));
        });
 
};

export const AddComments = data => ({
    type: AMOUNT_DATA_TO_STORE,
    data
})

