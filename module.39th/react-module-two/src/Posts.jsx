import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div style={{border: '2px solid tomato', borderRadius: '5px', padding: '10px'}}>
            <h2>Posts: {posts.length} </h2>
            {
                posts.map(post => <Post key={post.id} post={post} /> )
            }
        </div>
    )
}