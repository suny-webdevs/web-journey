import { useParams, useLoaderData, useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import RightSideNavbar from "../components/Navbar/RightSideNavbar"
import { FaArrowLeftLong } from "react-icons/fa6"

const NewsDetails = () => {
  const { id } = useParams()
  const news = useLoaderData()
  const currentNews = news.find((currentNews) => currentNews._id === id)
  const { image_url, title, details } = currentNews
  const navigate = useNavigate()

  const handleAllCategory = () => {
    navigate("/")
  }

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-10">
        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold">Dragon News</h2>
          <div className="mt-3 border p-5 rounded-md">
            <div>
              <img
                className="w-full mx-auto"
                src={image_url}
                alt={title}
                title={title}
              />
            </div>
            <h1 className="text-3xl font-semibold mt-8">{title}</h1>
            <p className="text-lg font-normal mt-4">{details}</p>
            <div className="mt-10">
              <button
                onClick={handleAllCategory}
                className="btn btn-secondary rounded-none flex items-center gap-3"
              >
                <FaArrowLeftLong className="text-xl" />
                <span className="text-base font-normal">
                  All news in this category
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <RightSideNavbar />
        </div>
      </div>
    </div>
  )
}

export default NewsDetails
