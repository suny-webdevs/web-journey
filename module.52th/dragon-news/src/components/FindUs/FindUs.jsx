import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const FindUs = () => {
  return (
    <div>
      <div className="flex flex-col mt-3">
        <a
          href=""
          className="flex items-center gap-4 hover:bg-slate-200 py-4 px-5 border border-b-0 border-gray-300 rounded-t-xl"
        >
          <FaFacebook className="text-2xl" />
          <span className="text-base font-normal">Facebook</span>
        </a>
        <a
          href=""
          className="flex items-center gap-4 hover:bg-slate-200 py-4 px-5 border border-gray-300"
        >
          <FaTwitter className="text-2xl" />
          <span className="text-base font-normal">Twitter</span>
        </a>
        <a
          href=""
          className="flex items-center gap-4 hover:bg-slate-200 py-4 px-5 border border-t-0 border-gray-300 rounded-b-xl"
        >
          <FaInstagram className="text-2xl" />
          <span className="text-base font-normal">Instagram</span>
        </a>
      </div>
    </div>
  )
}

export default FindUs
