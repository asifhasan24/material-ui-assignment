import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {title, body, id}= props.post
    const history = useHistory()
    const handleClick = (postId) => {
        const url = `/post/${postId}`
        history.push(url)
    }

    return (
        <div>
            <h4>Post Title : {title}</h4>
            <p>Post Desciption : {body}</p>
            <button onClick={() => handleClick(id)}>See Details</button>
        </div>
    );
};

export default Post;