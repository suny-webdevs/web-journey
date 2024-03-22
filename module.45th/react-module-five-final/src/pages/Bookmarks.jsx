import { Link } from "react-router-dom"

const Bookmarks = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center w-full h-screen">
        <div>
          <h1 className="text-4xl mb-5 text-center">No Bookmarks Here</h1>
          <div className="flex justify-center">
            <Link>
              <button className="btn btn-primary text-lg font-normal">
                Browse Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookmarks
