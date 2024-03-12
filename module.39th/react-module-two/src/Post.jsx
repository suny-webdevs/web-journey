/* eslint-disable react/prop-types */
export default function Post({post}) {
    const {title, body} = post
    return (
        <div style={{border: '2px solid lightgreen', borderRadius: '5px', padding: '10px', margin: '10px'}}>
            <h2>Title: {title} </h2>
            <p>Description: {body} </p>
        </div>
    )
}