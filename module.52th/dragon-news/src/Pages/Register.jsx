/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import toast, { Toaster } from "react-hot-toast"
import { sendEmailVerification, updateProfile } from "firebase/auth"

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const name = form.get("name")
    const photoUrl = form.get("photoUrl")
    const email = form.get("email")
    const password = form.get("password")
    const confirmPassword = form.get("confirmPassword")

    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)

        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        })

        sendEmailVerification(user).then(() => {
          toast.success(
            `A verification email has been send to your email ${user.email}`,
            { position: "bottom-center" }
          )
        })

        toast.success("Register Successful!", { position: "top-center" })
        navigate("/login")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <div className="flex justify-center items-center my-10 md:my-20">
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <h2 className="text-3xl text-center mt-5">Register your account</h2>
          <form
            onSubmit={handleRegister}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex items-center gap-3 mt-6">
              <input
                className="w-4 h-4 cursor-pointer"
                type="checkbox"
                name="checkBox"
                id="checkBox"
                required
              />
              <label
                htmlFor="checkBox"
                className="label cursor-pointer"
              >
                <span className="label-text">Accept Terms & Conditions</span>
              </label>
            </div>
            <div className="form-control mt-1">
              <button className="btn bg-[#444444] hover:bg-[#444444] text-white rounded-none">
                <span className="text-base font-normal">Register</span>
              </button>
            </div>
          </form>
          <div className="mb-10">
            <p className="text-sm text-center font-normal">
              Already have an account?{" "}
              <Link
                className="text-secondary"
                to="/login"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
