function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
        .catch(err => console.error('error', err))
}

function displayPosts(posts) {
    const postContainer = document.getElementById('post-container')
    for(const post of posts) {
        const div = document.createElement('div')
        div.innerHTML = `
            <h5>User: ${post.userId}</h5>
            <h4>Post: ${post.id}</h4>
            <h3>Title: ${post.title}</h3>
            <p>Description: ${post.body}</p>
        `
        div.classList.add('post-cont')
        postContainer.appendChild(div)
    }
}
