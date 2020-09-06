import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';



const Post = (props) => {
    const {title, body, id}= props.post
    const history = useHistory()
    const handleClick = (postId) => {
        const url = `/post/${postId}`
        history.push(url)
    }
    const postStyle = {
        border: '1px solid purple',              
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor : 'orange'
    }
    return (
        <div style={postStyle}>
         
        
            <h3>Post Title : {title}</h3>
            <p>Post Desciption : {body}</p>
            <Button onClick={() => handleClick(id)}  variant="contained" color="secondary">
            See Details
            <br/>
            
      </Button>
      <Divider />
           
        </div>
    );
};

export default Post;