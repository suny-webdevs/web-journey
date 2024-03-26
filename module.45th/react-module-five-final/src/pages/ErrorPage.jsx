import { Link, useRouteError } from "react-router-dom"
import NotFound from "../assets/undraw_page_not_found_re_e9o6.svg"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="container mx-auto">
      <div className="w-full h-full flex justify-center mt-20">
        <img
          className="w-[400px] h-[300px]"
          src={NotFound}
          alt="404 - Page Not Found"
        />
      </div>
      <h1 className="text-4xl text-center">
        Oops! {error.status} Page {error.statusText || error.message}
      </h1>
      <Link to={`/`}>
        <p className="text-primary text-center text-lg underline mt-5">
          Return Home
        </p>
      </Link>
    </div>
  )
}

export default ErrorPage
