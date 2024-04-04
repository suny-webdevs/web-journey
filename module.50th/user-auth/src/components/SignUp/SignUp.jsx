import { Helmet } from "react-helmet-async"
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth"
import auth from "../../Firebase/firebase.config"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa6"

const SignUp = () => {
  const [registerError, setRegisterError] = useState("")
  const [success, setSuccess] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [checkError, setCheckError] = useState("")

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const checked = e.target.terms.checked

    console.log(email, password, checked)

    setRegisterError("")
    setSuccess("")
    setPasswordError("")
    setCheckError("")

    if (password.length < 8) {
      setPasswordError("Password should be at least 8 characters or longer")
      return
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter")
      return
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter")
      return
    } else if (!/[0-9]/.test(password)) {
      setPasswordError("Password must contain at least one digit")
      return
    } else if (!/[!@#$\\%^&*()_+.,;:-]/.test(password)) {
      setPasswordError("Password must contain at least one special character")
      return
    } else if (!checked) {
      setCheckError("You must accept our terms and conditions")
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user
        setSuccess("Registration Successful!")

        updateProfile(user, {
          displayName: name,
        })

        sendEmailVerification(user).then(() => {
          alert("Please check email and verify your account")
        })
      })
      .catch((error) => {
        setRegisterError(error)
      })
  }

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center mt-5 text-success font-bold">
          Please Sign Up
        </h1>
        <form
          onSubmit={handleSignUpSubmit}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
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
              placeholder="Email"
              className="input input-bordered"
              required
            />
            {registerError && (
              <p className="text-error mt-2">
                This email is already registered!
              </p>
            )}
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
              className="cursor-pointer text-lg absolute right-[4%] top-[60%]"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {passwordError && <p className="text-error mt-2">{passwordError}</p>}
          <div className="flex items-center gap-3 mt-2">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label htmlFor="terms">
              Accept our <a className="text-primary">Terms and conditions</a>
            </label>
          </div>
          {checkError && <p className="text-error mt-1">{checkError}</p>}
          <div className="form-control mt-1">
            <button className="btn btn-success">Sign Up</button>
          </div>
          {success && (
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="text-success text-center font-medium tracking-wide bg-green-100 dark:bg-base-100 dark:border dark:border-success rounded-lg py-3 mt-2">
                {success}
              </p>
            </div>
          )}
          <p className="mt-2">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-primary"
            >
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
