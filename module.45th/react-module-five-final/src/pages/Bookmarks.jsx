import { useNavigate } from "react-router-dom"

const Bookmarks = () => {
  const navigate = useNavigate()

  return (
    <div className="">
      <div className="flex justify-center items-center w-full h-screen">
        <div>
          <h1 className="text-4xl mb-5 text-center">No Bookmarks Here</h1>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/blogs")}
              className="btn btn-primary text-lg font-normal"
            >
              Browse Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookmarks
