import { PiCoffeeFill } from "react-icons/pi"
import { Link } from "react-router-dom"

const Coffees = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col items-center">
        <p className="text-base font-raleway font-medium">
          --- Sip & Savor ---
        </p>
        <h1 className="text-5xl text-[#331A15] text-shadow-xl font-rancho mt-1 mb-7">
          Our Popular Products
        </h1>
        <Link
          to="/addcoffee"
          className="btn rounded font-rancho bg-[#E3B577] hover:bg-transparent text-[#331A15] text-xl text-shadow-xl tracking-wider border border-[#331A15] hover:border-[#331A15]"
        >
          Add coffee <PiCoffeeFill className="text-[#331A15] text-2xl" />
        </Link>
      </div>

      {/* Created Coffees will show here */}
      <div></div>
    </div>
  )
}

export default Coffees
