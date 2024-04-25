import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6"

const FooterLeft = () => {
  return (
    <div>
      <div className="container mx-auto px-5 md:px-0">
        <img
          src={logo}
          alt="logo"
        />
        <h1 className="text-5xl text-[#331A15] font-rancho text-shadow-xl mt-3">
          Espresso Emporium
        </h1>
        <p className="text-base font-raleway font-medium tracking-wide mt-3">
          Always ready to be your friend. Come & Contact with us to share your{" "}
          <br />
          memorable moments, to share with your best companion.
        </p>
        <div className="flex items-center gap-3 mt-5">
          <Link>
            <FaFacebook className="text-[#331A15] text-4xl" />
          </Link>
          <Link>
            <FaTwitter className="text-[#331A15] text-4xl" />
          </Link>
          <Link>
            <FaInstagram className="text-[#331A15] text-4xl" />
          </Link>
          <Link>
            <FaLinkedin className="text-[#331A15] text-4xl" />
          </Link>
        </div>
        <div className="mt-8">
          <h3 className="text-5xl text-[#331A15] text-shadow-xl font-rancho">
            Get in touch
          </h3>
          <div className="flex items-center gap-2 mt-3">
            <FaPhone />{" "}
            <span className="text-base font-medium font-raleway">
              +88 01533 333 333
            </span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <FaEnvelope />{" "}
            <span className="text-base font-medium font-raleway">
              info@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <FaLocationDot />{" "}
            <span className="text-base font-medium font-raleway">
              72, Wall street, King Road, Dhaka
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLeft
