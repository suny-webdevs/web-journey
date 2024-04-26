import PropTypes from "prop-types"
import toast, { Toaster } from "react-hot-toast"
// import toast, { Toaster } from "react-hot-toast"
import { FaEye, FaPen, FaTrash } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Coffee = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, photo, price } = coffee

  console.log(coffees)

  const handleDelete = (_id) => {
    fetch(`http://localhost:4000/coffee/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = coffees.filter((coffee) => coffee._id !== _id)
          setCoffees(remaining)
          toast.success("Coffee deleted successfully")
        } else {
          toast.error("SOmething went wrong")
        }
      })
  }

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder="false"
      />
      <div className="flex items-center gap-5 rounded-lg bg-[#F7F7F7B3] shadow-md">
        <figure>
          <img
            className="w-52 h-52 py-5"
            src={photo}
            alt={name}
          />
        </figure>
        <div className="w-full flex items-center justify-between">
          <div className="">
            <p className="text-lg font-raleway font-semibold">
              Name: <span className="text-gray-500 font-normal">{name}</span>
            </p>
            <p className="text-lg font-raleway font-semibold">
              Chef: <span className="text-gray-500 font-normal">{chef}</span>
            </p>
            <p className="text-lg font-raleway font-semibold">
              Price:{" "}
              <span className="text-gray-500 font-normal">{price} Taka</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 px-5">
            <div
              className="tooltip"
              data-tip="Details"
            >
              <Link
                to={`/coffee/${_id}`}
                className="text-lg text-[#331A15]"
              >
                <FaEye />
              </Link>
            </div>
            <div
              className="tooltip"
              data-tip="Update"
            >
              <Link
                to={`/updatecoffee/${_id}`}
                className="text-lg text-[#E3B577]"
              >
                <FaPen />
              </Link>
            </div>
            <div
              className="tooltip"
              data-tip="Delete"
            >
              <button
                onClick={() => handleDelete(_id)}
                className="text-lg text-error"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Coffee.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.any,
}

export default Coffee
