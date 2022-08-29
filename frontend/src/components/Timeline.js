import { Grid } from "@mui/material";
import React, { useEffect, useState } from 'react'
import Post from './Post'
import EditPost from "./EditPost";

function Timeline ({/* setToken */}) {

    const [posts, setPosts] = useState([]);
    const [editable, setEditable] = useState({id: null, isEditable: false});

    const getPosts = () => {
        fetch('http://localhost:4200/api/post')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(res => {
            setPosts(res)
        })
        .catch((err) => {
            console.error('err: ', err);
        })
    }

    useEffect(() => {
        getPosts();
    }, [editable]);

    return (
        <Grid>
            {posts.map( (post) => {
                if (editable.id == post._id && editable.isEditable) {
                    return (<EditPost key={post._id} post={post} setEditable={setEditable}/>)
                } else {
                    return (<Post key={post._id} post={post} setEditable={setEditable}/>)
                }
            })}
        </Grid>
    )
}

export default Timeline