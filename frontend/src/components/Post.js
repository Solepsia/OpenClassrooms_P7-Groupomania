import { Button, Card, CardContent } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
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

    const buttons = (user.isAdmin || post.userId === user.userId) &&
        <>
            <Button onClick={handleEditPost}>EDIT</Button>
            <Button onClick={handleRemovePost}>REMOVE</Button>
        </>

    const postCard =
        <Card xs={8} variant='outlined'>
            {post.imageUrl && (
                <CardMedia alt={post.imageUrl} component="img" image={post.imageUrl} />
            )}
            <CardContent>
                {post.content}
            </CardContent>
            <CardActions disableSpacing>
                <Like post={post} setEditable={setEditable}/>
                {buttons}
            </CardActions>
        </Card>

    return postCard
    }

export default Post