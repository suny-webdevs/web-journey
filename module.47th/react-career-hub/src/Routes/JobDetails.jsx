import { useLoaderData, useParams } from "react-router-dom"
import Styles from "../components/Style"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import { saveJobApplications } from "../utility/localStorage"
import { useState } from "react"

const JobDetails = () => {
  const jobs = useLoaderData()
  const { id } = useParams()
  const idInt = parseInt(id)
  const job = jobs.find((job) => job.id === idInt)

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
    contact_information,
  } = job
  const { phone, email, address } = contact_information

  const { btnBlock } = Styles

  const [clicked, setClicked] = useState(false)

  const handleApplyNow = () => {
    saveJobApplications(idInt)
    setClicked(true)
    toast("Applied Successfully!")
  }

  return (
    <div className="container mx-auto px-5 md:px-0 lg:px-0 my-5 lg:my-10">
      <h1 className="text-[#1A1919] text-3xl text-center font-bold">
        Job Details
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5">
        <div className="col-span-2">
          <div>
            <p>
              <strong>Job Description: </strong>
              {job_description}
            </p>
            <p>
              <strong>Job Responsibility: </strong>
              {job_responsibility}
            </p>
            <p>
              <strong>Educational Requirements: </strong>
              {educational_requirements}
            </p>
            <p>
              <strong>Experience: </strong>
              {experiences}
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <h3>Job Details</h3>
              <p>
                <strong>Job Title: </strong>
                {job_title}
              </p>
              <p>
                <strong>Salary</strong>
                {salary}
              </p>
            </div>
            <div>
              <h3>Contact Information</h3>
              <p>
                <strong>Phone: </strong>
                {phone}
              </p>
              <p>
                <strong>Email: </strong>
                {email}
              </p>
              <p>
                <strong>Address: </strong>
                {address}
              </p>
            </div>
          </div>
          <button
            onClick={handleApplyNow}
            className={btnBlock}
            type="button"
          >
            {clicked ? "Applied" : "Apply Now"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetails
