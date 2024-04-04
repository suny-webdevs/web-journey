import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { MainAuthContext } from "../../AuthContext/AuthContext"

const Navbar = () => {
  const { user, logOut } = useContext(MainAuthContext)
  // const { photoURL } = user

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("logged out")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const links = (
    <>
      <li>
        <NavLink
          className={"text-lg"}
          to="/"
        >
          Home
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink
              className={"text-lg"}
              to="/login"
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              className={"text-lg"}
              to="/signup"
            >
              Sign Up
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink
              className={"text-lg"}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"text-lg"}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={"text-lg"}
              to="/orders"
            >
              Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  )

  return (
    <div className="mt-3 mb-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <a className="text-2xl">AuthContextAPI</a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  className="mask mask-circle"
                  src={
                    "./src/assets/145857007_307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"
                  }
                />
              </div>
            </div>
            {user && (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-outline btn-error mt-4"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
