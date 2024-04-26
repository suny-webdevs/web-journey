import { FaArrowLeft } from "react-icons/fa6"
import { Link, useLoaderData } from "react-router-dom"

const CoffeeDetails = () => {
  const coffee = useLoaderData()

  const { photo, name, chef, supplier, taste, category, details } = coffee

  return (
    <div className="bg-add-coffee flex flex-col justify-center items-center pt-10 pb-20">
      <div className="w-full flex justify-start">
        <Link
          to="/"
          className="flex items-center gap-2 btn rounded font-rancho bg-transparent hover:bg-[#E3B577] text-[#331A15] text-xl text-shadow-xl tracking-wider border border-transparent hover:border-[#331A15] lg:ml-40 mb-10"
        >
          <FaArrowLeft /> Back to home
        </Link>
      </div>
      <div className="card shrink-0 w-full max-w-5xl shadow-md bg-[#F7F7F7B3] flex justify-center items-center gap-7 px-5 py-10">
        <div className="card lg:card-side">
          <figure>
            <img
              src={photo}
              alt={name}
            />
          </figure>
          <div className="card-body">
            <h3 className="text-5xl text-shadow-xl font-rancho mb-5">
              Niceties
            </h3>
            <p className="text-lg font-raleway font-semibold">
              Name: <span className="text-gray-500 font-normal">{name}</span>
            </p>
            <p className="text-lg font-raleway font-semibold">
              Chef: <span className="text-gray-500 font-normal">{chef}</span>
            </p>
            <p className="text-lg font-raleway font-semibold">
              Supplier:{" "}
              <span className="text-gray-500 font-normal">{supplier}</span>
            </p>
            <p className="text-lg font-raleway font-semibold">
              Taste: <span className="text-gray-500 font-normal">{taste}</span>
            </p>
            <p className="text-lg font-raleway font-semibold">
              Category:{" "}
              <span className="text-gray-500 font-normal">{category}</span>
            </p>
            <p className="text-lg font-raleway font-semibold">
              Details:{" "}
              <span className="text-gray-500 font-normal">{details}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeDetails
