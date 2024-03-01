function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayPosts(data))
      .catch(err => console.error('Something error', err))
}

function displayPosts(data) {
    const ul = document.getElementById('user-list')
    for(const user of data) {
        console.log(`${user.name}, ${user.username}`)
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
    }
}