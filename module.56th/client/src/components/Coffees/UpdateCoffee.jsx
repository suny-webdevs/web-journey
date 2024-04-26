import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"
import "./Coffee.css"
import toast, { Toaster } from "react-hot-toast"

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData()
  const navigate = useNavigate()

  const { _id, photo, name, chef, supplier, taste, category, details, price } =
    loadedCoffee

  const handleUpdateCoffee = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const chef = form.chef.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value
    const price = form.price.value
    // const file = form.file.value

    const coffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    }

    fetch(`http://localhost:4000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Coffee updated successfully")
          form.reset()
          navigate("/")
        }
      })
  }

  return (
    <div className="bg-add-coffee flex flex-col justify-center items-center pt-10 pb-20">
      <Toaster
        position="top-center"
        reverseOrder="false"
      />
      <div className="w-full flex justify-start">
        <Link
          to="/"
          className="flex items-center gap-2 btn rounded font-rancho bg-transparent hover:bg-[#E3B577] text-[#331A15] text-xl text-shadow-xl tracking-wider border border-transparent hover:border-[#331A15] lg:ml-40 mb-10"
        >
          <FaArrowLeft /> Back to home
        </Link>
      </div>
      <div className="card shrink-0 w-full max-w-5xl shadow-md bg-[#F7F7F7] flex justify-center items-center gap-7 px-5 py-10">
        <div className="w-full max-w-3xl">
          <h1 className="text-center text-5xl text-[#374151] text-shadow-xl font-rancho mt-10">
            Update Existing Coffee Details
          </h1>
          <p className="text-center text-base font-raleway font-medium mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form
          onSubmit={handleUpdateCoffee}
          className="card-body grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-[#1B1A1ACC] font-raleway font-bold">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-[#1B1A1ACC] font-raleway font-bold">
                Chef
              </span>
            </label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter coffee chef"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-[#1B1A1ACC] font-raleway font-bold">
                Supplier
              </span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-[#1B1A1ACC] font-raleway font-bold">
                Taste
              </span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter coffee taste"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-[#1B1A1ACC] font-raleway font-bold">
                Category
              </span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter coffee category"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-[#1B1A1ACC] font-raleway font-bold">
                Details
              </span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text text-base text-[#1B1A1ACC] font-raleway font-bold">
                Photo
              </span>
            </label>
            <input
              type="url"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base text-[#1B1A1ACC] font-raleway font-bold">
                Price
              </span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Enter coffee price"
              className="input input-bordered"
              required
            />
          </div>

          {/* <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text text-base text-[#1B1A1ACC] font-raleway font-bold">
                Photo
              </span>
            </label>
            <input
              type="file"
              name="file"
              className="file-input file-input-bordered file:bg-[#E3B577] file:border-[#E3B577] file:rounded-l file:text-[#331A15] file:font-raleway file:font-bold"
            />
          </div> */}

          <div className="form-control mt-6 md:col-span-2">
            <button className="btn btn-md rounded font-rancho bg-[#E3B577] hover:bg-transparent text-[#331A15] text-2xl text-shadow-xl tracking-wider border border-[#331A15] hover:border-[#331A15]">
              Update coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateCoffee
