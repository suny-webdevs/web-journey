/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import toast, { Toaster } from "react-hot-toast"

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const email = form.get("email")
    const password = form.get("password")

    login(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        toast.success("Login Successful!")
        navigate(location?.state ? location.state : "/")
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
          <h2 className="text-3xl text-center mt-5">Login your account</h2>
          <form
            onSubmit={handleLogin}
            className="card-body"
          >
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
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#444444] hover:bg-[#444444] text-white rounded-none">
                <span className="text-base font-normal">Login</span>
              </button>
            </div>
          </form>
          <div className="mb-10">
            <p className="text-sm text-center font-normal">
              Don't have an account?{" "}
              <Link
                className="text-secondary"
                to="/register"
              >
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
