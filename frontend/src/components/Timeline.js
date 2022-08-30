import { Grid } from "@mui/material";
import React, { useEffect, useState } from 'react'
import Post from './Post'
import EditPost from "./EditPost";

function Timeline () {

    const [postList, setPostList] = useState([]);
    const [editable, setEditable] = useState({id: null, isEditable: false});

    const getPostList = () => {
        fetch('http://localhost:4200/api/post')
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(res => {
            setPostList(res)
        })
        .catch((err) => {
            console.error('err: ', err);
        })
    }

    useEffect(() => {
        getPostList();
    }, [editable]);

    return (
        <Grid container spacing={2}>
            {postList.map( (post) => {
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