import toast, { Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const user = { name, email }

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("User add successfully")
        } else {
          toast.error("Something went wrong")
        }

        form.reset()
      })
  }

  return (
    <div className="flex justify-center items-center h-dvh">
      <Toaster
        position="top-center"
        reverseOrder="false"
      />
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center font-bold mt-5">User Info</h1>
        <form
          onSubmit={handleSubmit}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add user</button>
          </div>
        </form>
        <div className="m-5">
          <Link
            to="/users"
            className="text-xl text-primary font-medium"
          >
            See users
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
