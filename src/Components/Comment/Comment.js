import React, { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Comment = (props) => {
    const { postId } = useParams()
    const [id,setId] = useState({})
    
    const {name,email,body} = props.post 

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        
        fetch(url)
            .then(res => res.json())
            .then(data => setId(data))

    }, [])

    // const [img,setImg] = useState({})
    // useEffect(() => {
    //     const url = `https://randomuser.me/api/?results=1&gender=male`
        
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setImg(data))

    // }, [])
  
    return (
        <div>


         <p> Title :  {id.title}</p>
         <p>Description : {id.body}</p>
           <h2> name :{name}</h2> 
           {/* <img src={img.picture} alt=""/> */}
           <h3> email: {email} </h3>
           <p> Comment : {body} </p>
          
          
        </div>
    );
};

export default Comment; 