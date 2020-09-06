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






    return (
        <div>

            {
                post.map(post => <Comment post={post}></Comment>)
            }




        </div>
    );
};

export default PostDetails;