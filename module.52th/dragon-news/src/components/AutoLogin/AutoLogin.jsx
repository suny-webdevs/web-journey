import { FaGithub, FaGoogle } from "react-icons/fa"

const AutoLogin = () => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <button
        type="button"
        className="btn btn-outline btn-primary flex gap-2"
      >
        <FaGoogle className="text-xl" />
        <span className="text-base font-normal">Login with Google</span>
      </button>
      <button
        type="button"
        className="btn btn-outline flex gap-2"
      >
        <FaGithub className="text-xl" />
        <span className="text-base font-normal">Login with GitHub</span>
      </button>
    </div>
  )
}

export default AutoLogin
