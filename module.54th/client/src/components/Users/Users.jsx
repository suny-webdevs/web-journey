import { useState } from "react"
import { useLoaderData } from "react-router-dom"

const Users = () => {
  const users = useLoaderData()
  const [allUser, setAllUser] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const user = { name, email }

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("client post response", data)
        const newUser = [...users, data]
        setAllUser(newUser)

        form.reset()
      })
  }

  return (
    <div>
      <h1>Users: {allUser.length}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id=""
          />
          <br />
          <input
            type="email"
            name="email"
            id=""
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {allUser.map((user) => (
          <p key={user.id}>
            {user.id}. {user.name}: {user.email}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Users
