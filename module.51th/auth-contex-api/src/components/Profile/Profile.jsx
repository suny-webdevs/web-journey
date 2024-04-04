import { useContext } from "react"
import { MainAuthContext } from "../../AuthContext/AuthContext"

const Profile = () => {
  const { user } = useContext(MainAuthContext)
  const { displayName, email } = user

  return (
    <div>
      <h1 className="text-3xl">Welcome to Profile</h1>

      <div className="border border-base-300 rounded-xl p-5 w-[500px] mt-10">
        <div className="flex justify-center">
          <img
            className="mask mask-squircle w-24 h-24"
            src={
              "/src/assets/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"
            }
            alt={displayName}
            title={displayName}
          />
        </div>
        <h2 className="text-3xl text-center">{displayName}</h2>
        <p className="text-xl text-center">{email}</p>
      </div>
    </div>
  )
}

export default Profile
