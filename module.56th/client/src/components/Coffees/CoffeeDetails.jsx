import { FaArrowLeft } from "react-icons/fa6"
import { Link } from "react-router-dom"

const CoffeeDetails = () => {
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
      <div className="card shrink-0 w-full max-w-5xl shadow-md bg-[#F7F7F7] flex justify-center items-center gap-7 px-5 py-10">
        <div className="card lg:card-side">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-3xl text-shadow-xl font-rancho">Niceties</h3>
            <p>
              Name: <span>name</span>
            </p>
            <p>
              Chef: <span>chef</span>
            </p>
            <p>
              Supplier: <span>supplier</span>
            </p>
            <p>
              Taste: <span>taste</span>
            </p>
            <p>
              Category: <span>category</span>
            </p>
            <p>
              Details: <span>details</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeDetails
