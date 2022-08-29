import { Button, Card } from "@mui/material";
import React from 'react'

function Post ({ post }) {
    return (
        <Card className='post' variant='outlined'>
            <div className='post__content'>{post.content}</div>
            <div>[COMPOSANT LIKE/DISLIKE]</div>
            <Button>EDIT</Button>
            <Button>DELETE</Button>
        </Card>
    )
}

export default Post