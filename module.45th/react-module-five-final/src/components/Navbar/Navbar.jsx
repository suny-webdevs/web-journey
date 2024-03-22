import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { LuMenu } from "react-icons/lu"

const Navbar = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])

  const handleTheme = (event) => {
    if (event.target.checked) {
      setTheme("dark")
    }
    setTheme("light")
  }

  return (
    <div className="w-full fixed top-0 shadow-md">
      <div className="navbar bg-base-100 px-5">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <details className="dropdown">
              <summary
                tabIndex={0}
                className="m-1 btn btn-square"
              >
                <LuMenu className="text-2xl" />
              </summary>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-primary text-base px-5 py-1 rounded-lg"
                      : "text-base text-gray-400 px-5 py-1 hover:bg-indigo-400 hover:text-white rounded-lg"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-primary text-base px-5 py-1 rounded-lg"
                      : "text-base text-gray-400 px-5 py-1 hover:bg-indigo-400 hover:text-white rounded-lg"
                  }
                >
                  Blogs
                </NavLink>

                <NavLink
                  to="/bookmarks"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-primary text-base px-5 py-1 rounded-lg"
                      : "text-base text-gray-400 px-5 py-1 hover:bg-indigo-400 hover:text-white rounded-lg"
                  }
                >
                  Bookmarks
                </NavLink>
              </ul>
            </details>
          </div>
          <Link
            to={`/`}
            className="btn btn-ghost text-xl font-bold"
          >
            WebBlaze
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 space-x-5 hidden md:flex mr-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-base font-bold"
                  : "text-base text-gray-400 font-bold hover:text-primary"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-base font-bold"
                  : "text-base text-gray-400 font-bold hover:text-primary"
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                isActive
                  ? "text-primary text-base font-bold"
                  : "text-base text-gray-400 font-bold hover:text-primary"
              }
            >
              Bookmarks
            </NavLink>
          </ul>
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={(event) => handleTheme(event)}
              type="checkbox"
              value="dark"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
              />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
