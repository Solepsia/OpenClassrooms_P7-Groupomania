import { Button, Card } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import React, { useContext } from 'react';
import { UserContext } from "./App";
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
            <Card sx={{ maxWidth: 345 }} className='post' variant='outlined'>
                {post.imageUrl && (
                    <CardMedia alt={post.imageUrl} component="img" height="194" image={post.imageUrl} />
                )}
                <CardContent className='post__content'>
                    <Typography variant="body2" color="text.secondary">
                        {post.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Like post={post} setEditable={setEditable}/>
                    <Button onClick={handleEditPost}>EDIT</Button>
                    <Button onClick={handleRemovePost}>REMOVE</Button>
                </CardActions>
            </Card>
        )
    } else {
        return (
            <Card sx={{ maxWidth: 345 }} className='post' variant='outlined'>
                {post.imageUrl && (
                    <CardMedia alt={post.imageUrl} component="img" height="194" image={post.imageUrl} />
                )}
                <CardContent className='post__content'>
                    <Typography variant="body2" color="text.secondary">
                        {post.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Like post={post} setEditable={setEditable}/>
                </CardActions>
            </Card>
        )
    }
}

export default Post