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
    const headerStyle = {
        border: '1px solid purple',              
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor : 'yellow'
        
    }
    return (
        <div style={headerStyle}>
        <h1>Social Buddy</h1>
            
            {
                post.map(pd => <Post  post={pd}></Post>)
            }
           
        </div>




    );
};

export default Home;