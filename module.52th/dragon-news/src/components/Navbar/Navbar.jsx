import { Link, NavLink } from "react-router-dom"
import UserPhoto from "../../assets/user.png"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import toast, { Toaster } from "react-hot-toast"

const Navbar = () => {
  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
      .then(() => toast.success("Successfully logged out!"))
      .catch((error) => console.log(error.message))
  }

  // Nav Links
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-normal bg-[#444444] hover:bg-[#444444] text-base hover:text-base-300 text-base-300 rounded-none px-10 py-2"
              : "font-normal text-[#444444] text-base hover:bg-[#F7F7F7] rounded-none px-10 py-2"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-normal bg-[#444444] hover:bg-[#444444] text-base hover:text-base-300 text-base-300 rounded-none px-10 py-2"
              : "font-normal text-[#444444] text-base hover:bg-[#F7F7F7] rounded-none px-10 py-2"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-normal bg-[#444444] hover:bg-[#444444] text-base hover:text-base-300 text-base-300 rounded-none px-10 py-2"
              : "font-normal text-[#444444] text-base hover:bg-[#F7F7F7] rounded-none px-10 py-2"
          }
          to="/career"
        >
          Career
        </NavLink>
      </li>
    </>
  )

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
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
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
        </div>
        <div className="navbar-end flex gap-5">
          <div className="flex items-center gap-2">
            <img
              className="mask mask-circle w-10 h-10"
              src={UserPhoto}
              alt="User"
            />
            <span>{user ? user.displayName || user.email : ""}</span>
          </div>
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-[#444444] hover:bg-[#444444] text-base text-base-300 font-normal rounded-none px-10"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn bg-[#444444] hover:bg-[#444444] text-base text-base-300 font-normal rounded-none px-10"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
