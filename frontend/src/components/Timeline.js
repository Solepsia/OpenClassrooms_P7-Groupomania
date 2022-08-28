import { postList } from '../data/postList'
import React from 'react'

class Timeline extends React.Component {

    constructor (props) {
        super(props)
        this.state = { posts: [] }
    }

    getPosts () {
        // fetch('localhost:3000/api/data')
        // .then((data) => {
            // this.setState({ posts: data })
        // })

        this.setState({ posts: postList})
    }

    componentDidMount () {
        this.getPosts()
    }

    render () {
    return (
        <ul>
            {this.state.posts.map( (post) => (
                <li key={post.id}>{post.title}&nbsp;
                {post.likes > 0 && <span>( ˘ ³˘)♥</span>}
                {post.likes < 0 && <span>( ಠ ʖ̯ ಠ)</span>}
                {post.likes === 0 && <span>¯\_(ツ)_/¯</span>}
                </li>
            ))}
        </ul>
    )
    }
}

export default Timeline