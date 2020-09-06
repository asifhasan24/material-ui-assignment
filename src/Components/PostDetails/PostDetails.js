import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Comment from '../Comment/Comment';



const PostDetails = () => {
    const { postId } = useParams()
    const [post, setPosts] = useState([])
  
     useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))

    }, []
    );
   


    const headerStyle = {
        border: '1px solid purple',              
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor : 'yellow'
        
    }

  

    
    return (
        <div style={headerStyle} >
        <h1>Details Information</h1>

            {
                post.map(post => <Comment key={postId} post={post}></Comment>)
            }
           




        </div>
    );
};

export default PostDetails;