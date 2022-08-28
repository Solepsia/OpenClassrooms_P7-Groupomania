import React from 'react'

class Post extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            postId: props.postId,
            post: null
            // timestamp: "",
            // likes: 0,
            // dislikes: 0,
            // postContent: "",
            // postId: ""
        }
    }

    getPost (postId) {        
        // fetch dans l'API par l'ID ou le timestamp
        const post = {}
        this.setState({
            post: post
            // timestamp: post.timestamp,
            // likes: post.likes,
            // dislikes: post.dislikes,
            // postContent: post.postContent,
            // postId: post.postId
        })
    }

    componentDidMount (postId) {
        this.getPost(this.state.postId)
    }

    render () {
        if (this.state.post)
        return (
            <div className='post'>
                <div>COMPOSANT DATE/HEURE</div>
                <div className='post__content'>{this.state.postContent}</div>
                <div>COMPOSANT LIKE/DISLIKE</div>
                <div>COMPOSANT EDIT/DELETE</div>
            </div>
        )
        else {
            return (
                <div className='post'>
                </div>
            )
        }
    }
}

export default Post