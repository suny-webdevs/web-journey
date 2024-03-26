import PropTypes from "prop-types"
import Styles from "../Style"
import { SlLocationPin } from "react-icons/sl"
import { PiCurrencyCircleDollar } from "react-icons/pi"
import { useNavigate } from "react-router-dom"

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job
  const { btnMd, btnOutlineDisabled } = Styles

  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/job/${id}`)
  }

  return (
    <div>
      <div className="p-5 border border-gray-200 rounded-xl">
        <div className="mb-5">
          <img
            src={logo}
            className=""
          />
        </div>
        <h3 className="text-2xl text-[#1A1919] font-bold">{job_title}</h3>
        <p className="text-lg text-[#474747] font-medium">{company_name}</p>
        <div className="flex gap-3 my-2">
          <button
            className={btnOutlineDisabled}
            type="button"
          >
            {remote_or_onsite}
          </button>
          <button
            className={btnOutlineDisabled}
            type="button"
          >
            {job_type}
          </button>
        </div>
        <div className="flex items-center gap-10 text-lg text-[#757575] my-4">
          <div className="flex items-center gap-1">
            <SlLocationPin className="text-xl" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <PiCurrencyCircleDollar className="text-2xl" />
            <span>{salary}</span>
          </div>
        </div>
        <button
          onClick={handleViewDetails}
          className={btnMd}
          type="button"
        >
          View Details
        </button>
      </div>
    </div>
  )
}

FeaturedJob.propTypes = {
  job: PropTypes.object,
}

export default FeaturedJob
