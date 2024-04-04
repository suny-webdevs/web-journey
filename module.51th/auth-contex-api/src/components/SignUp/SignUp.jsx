import { useContext } from "react"
import { Link } from "react-router-dom"
import { MainAuthContext } from "../../AuthContext/AuthContext"
import { updateProfile } from "firebase/auth"
import { Helmet } from "react-helmet-async"

const SignUp = () => {
  const { createUser } = useContext(MainAuthContext)

  const handleSignUp = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    createUser(email, password)
      .then((result) => {
        alert("Sign up successful")
        console.log(result.user)
        updateProfile(result.user, {
          displayName: name,
        })
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          onSubmit={handleSignUp}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
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
              placeholder="email"
              name="email"
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
              placeholder="password"
              name="password"
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
            <button className="btn btn-success">Sign Up</button>
          </div>
          <div>
            <p>
              Have a account?{" "}
              <Link
                to="/login"
                className="text-primary"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
