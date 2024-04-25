import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"

export const UserContext = createContext(null)

const UsersContext = ({ children }) => {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState(users)

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
  }, [])

  const userInfo = { users, filteredUsers, setFilteredUsers }
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  )
}

UsersContext.propTypes = {
  children: PropTypes.node,
}

export default UsersContext
