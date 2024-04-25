import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="bg-navbar-img py-2 flex items-center justify-center gap-2">
      <Link to="/">
        <img
          className="w-12 h-12"
          src={logo}
          alt="logo"
        />
      </Link>
      <Link to="/">
        <h1 className="text-3xl text-white font-rancho">Espresso Emporium</h1>
      </Link>
    </div>
  )
}

export default Navbar
