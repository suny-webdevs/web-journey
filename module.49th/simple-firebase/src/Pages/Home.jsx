import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Simple-firebase</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center">
              <div className="flex gap-3">
                <Link to="/login">
                  <button
                    className="btn btn-primary"
                    type="button"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/registration">
                  <button
                    className="btn btn-secondary"
                    type="button"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
