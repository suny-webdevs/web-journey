import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MainAuthContext } from "../../AuthContext/AuthContext"
import { Helmet } from "react-helmet-async"

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(MainAuthContext)
  const navigate = useNavigate()
  //   const [googleUser, setGoogleUser] = useState([])

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    loginUser(email, password)
      .then((result) => {
        console.log(result.user)
        alert("Login successful")
        navigate("/dashboard")
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result.user)
        alert("Login successful")
        navigate("/dashboard")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
            <button className="btn btn-primary">Login</button>
          </div>
          <div>
            <p>
              New here?{" "}
              <Link
                to="/signup"
                className="text-success"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <div className="divider">OR</div>
          <div className="flex flex-col">
            <button
              className="btn btn-primary"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
