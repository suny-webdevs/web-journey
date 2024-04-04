import { useContext } from "react"
import { MainAuthContext } from "../AuthContext/AuthContext"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(MainAuthContext)

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (user) {
    return children
  }
  return <Navigate to="/login" />
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
}

export default PrivateRoute
