import { Button, Card } from "@mui/material";
import React, { useEffect } from 'react';
import getToken from "./token/getToken";

function Post ({ post }) {
    
    const handleRemovePost = (event) => {
        event.preventDefault();
        console.log(post);
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

return (
    <Card className='post' variant='outlined'>
        <div className='post__content'>{post.content}</div>
        <div>[COMPOSANT LIKE/DISLIKE]</div>
        <Button>EDIT</Button>
        <Button onClick={handleRemovePost}>REMOVE</Button>
    </Card>
    )
}

export default Post