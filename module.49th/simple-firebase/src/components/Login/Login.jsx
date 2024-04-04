import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { app } from "../../firebase/firebase.init"
import { useState } from "react"
import { Helmet } from "react-helmet-async"

const Login = () => {
  const [user, setUser] = useState(null)
  const [githubUser, setGithubUser] = useState(null)

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const providerGithub = new GithubAuthProvider()

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        setUser(user)
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        setUser(null)
        console.log(res)
      })
      .catch((error) => console.log(error.message))
  }

  const handleLoginWithGithub = () => {
    signInWithPopup(auth, providerGithub)
      .then((res) => {
        const user = res.user
        setGithubUser(user)
        console.log(user)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <Helmet>
        <title>Login | Simple-firebase</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <br />
            <div className="flex flex-col gap-3">
              {user && (
                <div className="flex items-start gap-3 border border-gray-400 p-5 rounded-lg">
                  <div>
                    <img
                      className="mask mask-circle w-14 h-14"
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <div>
                    <p> {user.displayName} </p>
                    <p> {user.email} </p>
                    <div>
                      <button
                        onClick={handleSignOut}
                        className="btn btn-error mt-3"
                        type="button"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {githubUser && (
                <div className="flex items-start gap-3 border border-gray-400 p-5 rounded-lg">
                  <div>
                    <img
                      className="mask mask-circle w-14 h-14"
                      src={githubUser.photoURL}
                      alt=""
                    />
                  </div>
                  <div>
                    <p> {githubUser.displayName} </p>
                    <p> {githubUser.email} </p>
                    <div>
                      <button
                        onClick={handleSignOut}
                        className="btn btn-error mt-3"
                        type="button"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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

              <div className="divider">OR</div>

              <button
                onClick={handleLogin}
                className="btn btn-secondary"
                type="button"
              >
                Login with Google
              </button>
              <button
                onClick={handleLoginWithGithub}
                className="btn"
                type="button"
              >
                Login with GitHub
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
