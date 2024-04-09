import { Link } from "react-router-dom"
import HeadingLogo from "../../assets/logo.png"
import moment from "moment"

const Header = () => {
  return (
    <div className="mt-3">
      <Link
        to="/"
        className="flex justify-center"
      >
        <img
          src={HeadingLogo}
          alt="Logo"
        />
      </Link>
      <p className="text-center text-[#706F6F] font-bold mt-3">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#403F3F] to-[#706F6F]">
        {moment().format("dddd, MMMM DD, YYYY")}
      </p>
    </div>
  )
}

export default Header
