import toast, { Toaster } from "react-hot-toast"
import { Link, useLoaderData, useNavigate } from "react-router-dom"

const Update = () => {
  const loadedUser = useLoaderData()

  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const user = { name, email }

    fetch(`http://localhost:3000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("User updated successfully")
          navigate("/users")
        } else {
          toast.error("Something went wrong")
        }
      })
  }

  return (
    <div className="h-dvh flex justify-center items-center">
      <Toaster
        position="top-center"
        reverseOrder="false"
      />
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center text-primary font-bold">
          Update info
        </h1>
        <form
          onSubmit={handleUpdate}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={loadedUser.name}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={loadedUser.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 flex flex-col justify-center gap-3">
            <button className="btn btn-primary">Update</button>
            <Link
              to="/users"
              className="btn btn-error"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update
