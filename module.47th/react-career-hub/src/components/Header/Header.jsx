import { Link, NavLink } from "react-router-dom"
import Styles from "../Style"

const Header = () => {
  const { navLinkActive, navLink, btnMd } = Styles
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? navLinkActive : navLink)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          className={({ isActive }) => (isActive ? navLinkActive : navLink)}
        >
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) => (isActive ? navLinkActive : navLink)}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/applied"
          className={({ isActive }) => (isActive ? navLinkActive : navLink)}
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? navLinkActive : navLink)}
        >
          Blog
        </NavLink>
      </li>
    </>
  )
  return (
    <div>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <details className="dropdown">
            <summary
              tabIndex={0}
              className="m-1 btn lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </summary>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </details>

          <Link
            to="/"
            className="btn btn-ghost text-2xl text-[#1A1919] font-extrabold"
          >
            Career Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end">
          <button
            type="button"
            className={btnMd}
          >
            Star Applying
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
