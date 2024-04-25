const FooterRight = () => {
  return (
    <div>
      <div>
        <h3 className="text-5xl text-shadow-xl font-rancho">Connect with us</h3>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
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
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-lg w-full max-w-xl"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <div>
              <button className="btn rounded-full text-xl text-[#331A15] hover:text-white tracking-wider font-rancho border-2 border-[#331A15] bg-transparent hover:bg-[#331A15]">
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FooterRight
