import { Helmet } from "react-helmet-async"

const Home = () => {
  return (
    <div className="mb-5">
      <Helmet>
        <title>Home - AuthContextAPI</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
