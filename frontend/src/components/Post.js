import { Button, Card } from "@mui/material";
import React, { useEffect } from 'react';
import getToken from "./token/getToken";

function Post ({ post }) {
    
    const handleRemovePost = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4200/api/post/${post._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        })
        .then((res) => {
            if (res.ok) {
                return(res.json());
            }
        })
        .catch(err => {
            if (err) {
                console.error(err);
            }
        })
    }

    const handleEditPost = (event) => {
        event.preventDefault();
        window.location.href = "/editPost";
    }

return (
    <Card className='post' variant='outlined'>
        <Card className='post__content'>{post.content}</Card>
        <Button>+1</Button>
        <Button>-1</Button>
        <Button onClick={handleEditPost}>EDIT</Button>
        <Button onClick={handleRemovePost}>REMOVE</Button>
    </Card>
    )
}

export default Post