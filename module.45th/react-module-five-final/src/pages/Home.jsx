import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <div className={`w-full h-screen flex justify-center items-center`}>
      <div>
        <section className="">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              Welcome to
              <span className="text-violet-400"> WebBlaze </span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              Fuel Your Development Journey with Web Blaze: Where Ideas Ignite
              and Innovators Unite!
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to={`/blogs`}>
                <button className="btn btn-primary text-lg font-normal">
                  Read Blogs
                </button>
              </Link>
              <Link to={`/bookmarks`}>
                <button className="btn btn-outline btn-primary text-lg font-normal">
                  Bookmarks
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
