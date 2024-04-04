import { Helmet } from "react-helmet-async"

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl text-center mt-5 text-secondary font-bold">
          Reset Password
        </h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">New password</span>
            </label>
            <input
              type="password"
              placeholder="New password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm new password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Reset</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
