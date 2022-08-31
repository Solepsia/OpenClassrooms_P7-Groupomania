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
        <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        >
            <Grid
            item
            container
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            rowSpacing={2}
            xs={6}
            >
                {postList.map( (post) => {
                    if (editable.id === post._id && editable.isEditable) {
                        return (<Grid key={post._id} item xs={12} md={6}>
                                    <EditPost
                                    post={post}
                                    setEditable={setEditable}
                                    />
                                </Grid>)
                    } else {
                        return (<Grid key={post._id} item xs={12} md={6}>
                                    <Post
                                    post={post}
                                    setEditable={setEditable}
                                    />
                                </Grid>)
                    }
                })}
            </Grid>
        </Grid>
    )
}

export default Timeline