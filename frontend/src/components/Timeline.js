import Grid from "@mui/material";
import React, { useEffect, useState } from 'react'
import Post from './Post'

function Timeline ({/* setToken */}) {

    const [posts, setPosts] = useState([]);

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
    });

    return (
        <div>
            {posts.map( (post) => (
                <Post key={post._id} post={post}/>
            ))}
        </div>
    )
}

export default Timeline