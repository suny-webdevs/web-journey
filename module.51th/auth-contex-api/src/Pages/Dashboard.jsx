import { useContext } from "react"
import { MainAuthContext } from "../AuthContext/AuthContext"

const Dashboard = () => {
  const { user } = useContext(MainAuthContext)
  const { displayName, email } = user

  return (
    <div>
      <h1 className="text-3xl">Welcome to dashboard.</h1>
      <h2 className="text-xl">{displayName}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Dashboard
