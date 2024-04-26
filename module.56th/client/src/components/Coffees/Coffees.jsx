import { useState } from "react"
import { PiCoffeeFill } from "react-icons/pi"
import { Link } from "react-router-dom"
import Coffee from "./Coffee"
import "./Coffee.css"
import PropTypes from "prop-types"

const Coffees = ({ loadedCoffees }) => {
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className="my-20 bg-add-coffee">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-40 mt-10">
        {coffees.map((coffee) => (
          <Coffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  )
}

Coffees.propTypes = {
  loadedCoffees: PropTypes.array,
}

export default Coffees
