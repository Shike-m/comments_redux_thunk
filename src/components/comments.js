import React from 'react';
import { connect } from 'react-redux'

class CommentList extends React.Component {
   
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
    return (
       state.Comments
    )
}
export default connect(mapToState)(CommentList);