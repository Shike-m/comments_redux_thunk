import React from 'react';
import { connect } from 'react-redux'
import { getComments } from '../reducer/actions';

class CommentList extends React.Component {
    componentDidMount() {
        this.props.mountData();
    }
    render() {
        const { post, imgUrl, comments } = this.props;
        return (
            <div>
                <p style={{ fontSize: '20px', fontWeight: '700', textAlign: 'center', margin: '10px' }}>{post}</p>
                <img style={{ width: '15%', margin: '10px auto' }} src={imgUrl} alt="img" />
                <hr />
                <p style={{fontWeight:'700',color:'red',fontSize:'1.5em'}}>Comments:</p>
                <ul style={{ textAlign: 'left', margin: '20px 50px', padding: '10px 30px' }}>
                    {
                        comments.map(item => {
                            return <li key={item.name}>
                                <span style={{ fontSize: '30px', fontWeight: '900',marginRight:'30px' }}
                                >{item.name}</span>:
                                <span style={{fontSize:"20px",margin:'0 20px'}}>{item.comment}</span></li>
                        })
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
export default connect(mapToState, mapToProps)(CommentList);