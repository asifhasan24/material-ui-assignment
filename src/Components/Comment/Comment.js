import React, { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

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

   let img =`https://loremflickr.com/320/240?lock=${postId}`
  
    const postStyle = {
        border: '1px solid purple',              
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor : 'orange'
    }
  
    return (
        <div style={postStyle} >


         <h2> Post Title :  {id.title}</h2>
         <h4> Post Description : {id.body}</h4>
        <div className="container">
      
        <img style={{float:'left',width:'200px',height:'100px'}} src={img} alt=""/>
        </div>
        
           <h2 style={{float:'left'}}>  Name:{name}</h2>
           
             
         <br/>
         <br/>
         <br/>
           <h3> Email: {email} </h3>
           <h3> Comment : {body} </h3>
           
           <Divider />
          
        </div>
    );
};

export default Comment; 