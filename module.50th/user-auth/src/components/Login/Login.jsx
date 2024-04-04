import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import auth from "../../Firebase/firebase.config"
import { useRef, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa6"

const Login = () => {
  const [loginError, setLoginError] = useState("")
  const [loginSuccess, setLoginSuccess] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const emailRef = useRef(null)
  // const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)

    setLoginError("")
    setLoginSuccess("")

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user)

        if (!result.user.emailVerified) {
          setLoginError("Please verify your email")

          sendEmailVerification(result.user).then(() => {
            alert("Please check email and verify your account")
          })

          return
        } else {
          setLoginSuccess("Login successful")
        }
      })
      .catch((error) => {
        console.error(error.code, error.message)
        setLoginError("Invalid email or password")
      })
  }

  const handleForgotPassword = () => {
    const email = emailRef.current.value
    if (!email) {
      console.log("Please provide an email")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log("Please provide a valid email")
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(`A reset email has been sent to ${email}`)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  // const handleNavigate = () => {
  //   navigate("/dashboard")
  // }

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center text-primary font-bold mt-5">
          Please Login
        </h1>
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
              ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer text-lg absolute right-[5%] top-[41%]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            <label className="label">
              <a onClick={handleForgotPassword}>
                <span className="label-text-alt link link-hover">
                  Forgot password?
                </span>
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              // onClick={handleNavigate}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
          <div>
            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="text-primary mt-2"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <div>
            {loginError && (
              <p className="text-error text-center font-medium tracking-wide py-3 rounded-lg mt-2 dark:bg-base-100 dark:border dark:border-error">
                {loginError}
              </p>
            )}
            {loginSuccess && (
              <p className="text-success text-center font-medium tracking-wide py-3 rounded-lg mt-2 dark:bg-base-100 dark:border dark:border-success">
                {loginSuccess}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
