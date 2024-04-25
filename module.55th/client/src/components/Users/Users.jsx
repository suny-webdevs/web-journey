// import { useContext } from "react"
import { Link, useLoaderData } from "react-router-dom"
import User from "./User"
import { createContext, useState } from "react"
// import { UserContext } from "../../UsersContext/UsersContext"

export const UserContext = createContext(null)

const Users = () => {
  // const { users } = useContext(UserContext)
  const loadedUser = useLoaderData()
  const [users, setUsers] = useState(loadedUser)

  const userInfo = { users, setUsers }
  let count = 1

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between bg-base-100 w-full sticky top-0 left-0">
        <h1 className="mt-5 text-3xl text-center text-primary font-bold">
          Users: {users.length}
        </h1>
        <div>
          <Link
            to="/"
            className="text-primary"
          >
            Home
          </Link>
        </div>
      </div>
      <UserContext.Provider value={userInfo}>
        <div>
          {users.map((user) => (
            <User
              key={user._id}
              user={user}
              count={count++}
            />
          ))}
        </div>
      </UserContext.Provider>
    </div>
  )
}

export default Users
