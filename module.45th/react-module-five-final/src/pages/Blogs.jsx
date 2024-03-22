import { Link, useLoaderData } from "react-router-dom"
import Blog from "../components/Blog/Blog"

const Blogs = () => {
  const blogs = useLoaderData()
  const { id, cover_image, title, readable_publish_date, description } =
    blogs[0]

  return (
    <div className="px-5 md:px-0 my-20">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          to={`/blog/${id}`}
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
        >
          <img
            src={cover_image}
            alt={title}
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-400">
              {readable_publish_date}
            </span>
            <p>{description}</p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs
            .map((blog) => (
              <Blog
                key={blog.id}
                blog={blog}
              />
            ))
            .slice(1)}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="btn btn-ghost bg-primary hover:bg-primary text-white text-lg font-normal"
        >
          Load more posts...
        </button>
      </div>
    </div>
  )
}

export default Blogs
