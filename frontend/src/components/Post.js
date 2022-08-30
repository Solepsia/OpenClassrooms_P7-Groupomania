import { Button, Card } from "@mui/material";
import React, { useContext, useState } from 'react';
import { UserContext } from "./App";
import getToken from "./auth-service/getToken";
import getUserID from './auth-service/getUserID';
import Like from "./Like";

function Post ({ post, setEditable }) {

    const user = useContext(UserContext);
    
    const handleRemovePost = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4200/api/post/${post._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        .then((res) => {
            if (res.ok) {
                return(res.json());
            }
        })
        .then(() => {
            setEditable({id: null, isEditable: false})
        })
        .catch(err => {
            if (err) {
                console.error(err);
            }
        })
    }

    const handleEditPost = (event) => {
        event.preventDefault();
        setEditable({id: post._id, isEditable: true});
    }

    if (post.userId === user.userId) {
        return (
            <Card className='post' variant='outlined'>
                <Card className='post__content'>{post.content}</Card>
                <Like post={post} setEditable={setEditable}/>
                <Button onClick={handleEditPost}>EDIT</Button>
                <Button onClick={handleRemovePost}>REMOVE</Button>
            </Card>
        )
    } else {
        return (
            <Card className='post' variant='outlined'>
                <Card className='post__content'>{post.content}</Card>
                <Like post={post} setEditable={setEditable}/>
            </Card>
        )
    }
}

export default Post