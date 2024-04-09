import PropTypes from "prop-types"
import { FaRegBookmark } from "react-icons/fa6"
import { BsShare } from "react-icons/bs"
import { Link } from "react-router-dom"

const News = ({ news }) => {
  const { _id, author, title, image_url, details, rating, total_view } = news

  return (
    <div className="border rounded-lg">
      <div className="flex justify-between px-5 py-2 bg-gray-200">
        <div className="flex items-center gap-2">
          <div>
            <img
              className="mask mask-circle w-10 h-10"
              src={author.img}
              alt={author.name}
            />
          </div>
          <div>
            <h4>{author.name}</h4>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaRegBookmark className="text-xl" />
          <BsShare className="text-xl" />
        </div>
      </div>
      <div className="px-5 mt-3">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <img
          className="mt-3"
          src={image_url}
          alt={title}
        />
        {details.length > 200 ? (
          <p className="text-base text-gray-500 font-medium mt-3">
            {details.slice(0, 200)}{" "}
            <Link
              className="text-orange-500 ml-3"
              to={`/news/${_id}`}
            >
              Read More...
            </Link>
          </p>
        ) : (
          <p className="text-base text-gray-500 font-medium mt-3">
            {details}{" "}
            <Link
              className="text-orange-500 ml-3"
              to={`/news/${_id}`}
            >
              Read More...
            </Link>
          </p>
        )}
        <div className="divider"></div>
        <div className="flex justify-between mb-5">
          <div>{rating.number}</div>
          <div>{total_view}</div>
        </div>
      </div>
    </div>
  )
}

News.propTypes = {
  news: PropTypes.object,
}

export default News
