import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6"
import "./Coffee.css"

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const chef = form.chef.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value
    // const file = form.file.value

    const coffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    }

    console.log(coffee)
  }

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
        <div className="w-full max-w-3xl">
          <h1 className="text-center text-5xl text-[#374151] text-shadow-xl font-rancho mt-10">
            Add new coffee
          </h1>
          <p className="text-center text-base font-raleway font-medium mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form
          onSubmit={handleAddCoffee}
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
              placeholder="Enter photo url"
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
              Add coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCoffee
