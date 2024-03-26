import PropTypes from "prop-types"

const AppliedJob = ({ job }) => {
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
  console.log(id)
  return (
    <div>
      <div className="border border-gray-200 rounded-xl p-5">
        <div>
          <img
            src={logo}
            alt=""
          />
        </div>
        <div>
          <h3>{job_title}</h3>
          <p>{company_name}</p>
          <div>
            <button>{remote_or_onsite}</button>
            <button>{job_type}</button>
          </div>
          <div>
            <div>
              <span>{location}</span>
            </div>
            <div>
              <span>{salary}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

AppliedJob.propTypes = {
  job: PropTypes.object,
}

export default AppliedJob
