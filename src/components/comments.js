import React from 'react';
import {connect } from 'react-redux'
import { getComments } from '../reducer/actions';

class CommentList extends React.Component {
    componentDidMount() {
        this.props.mountData();
   }
    render() {
     const { comments } = this.props;
        return (
            <div>
                <ul>
                    {
                        console.log(comments)
   
                    }
                </ul>
            </div>
        )
    }
}
const mapToState = state => {
    return {
        post: state.post,
        imgUrl: state.url,
        comments: state.comments
    } 
}

const mapToProps = dispatch => {
    return {
        mountData() {
            dispatch(getComments);
        }
    }
}
export default connect(mapToState,mapToProps)(CommentList);