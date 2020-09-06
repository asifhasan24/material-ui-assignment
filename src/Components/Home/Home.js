import React, { useState, createContext } from 'react';
import { useEffect } from 'react';
import Post from '../Post/Post';



const Home = () => {
    const [post, setPosts] = useState([])
  
  
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])
   
    return (
        <div>
            <h1>{post.length}</h1>
            {
                post.map(pd => <Post post={pd}></Post>)
            }
           
        </div>




    );
};

export default Home;