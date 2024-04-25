import PropTypes from "prop-types"
import { useContext } from "react"
import toast, { Toaster } from "react-hot-toast"
import { MdDelete } from "react-icons/md"
import { FaPen } from "react-icons/fa"
import { Link } from "react-router-dom"
import { UserContext } from "./Users"

const User = ({ user, count }) => {
  const { users, setUsers } = useContext(UserContext)

  const handleDeleteUser = (_id) => {
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = users.filter((user) => user._id !== _id)
          setUsers(remaining)
          toast.success("User deleted successfully")
        } else {
          toast.error("Something went wrong")
        }
      })
  }

  return (
    <div className="flex justify-between items-center border rounded-lg my-5">
      <Toaster
        position="top-center"
        reverseOrder="false"
      />
      <div className="px-5">
        <span className="text-xl">{count}</span>
      </div>
      <div className="flex-grow py-5 shadow-lg flex flex-col items-center">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user._id}</p>
      </div>
      <div className="px-5 flex items-center gap-4">
        <div
          className="tooltip"
          data-tip="Update"
        >
          <Link to={`/update/${user._id}`}>
            <button className="text-lg">
              <FaPen />
            </button>
          </Link>
        </div>
        <div
          className="tooltip"
          data-tip="Delete"
        >
          <button
            className="text-2xl"
            onClick={() => handleDeleteUser(user._id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object,
  count: PropTypes.number,
}

export default User
