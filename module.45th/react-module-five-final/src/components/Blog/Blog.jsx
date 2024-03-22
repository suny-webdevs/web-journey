import PropTypes from "prop-types"
import missingPhoto from "../../assets/missing-photo.png"
import { Link } from "react-router-dom"

const Blog = ({ blog }) => {
  const { id, cover_image, title, readable_publish_date, description } = blog
  return (
    <div>
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
      >
        <div className="border-2 border-indigo-400 hover:border-primary p-2">
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || missingPhoto}
            alt={title}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-400">
              {readable_publish_date}
            </span>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object,
}

export default Blog
