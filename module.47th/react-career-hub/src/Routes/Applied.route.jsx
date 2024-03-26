import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { getJobApplications } from "../utility/localStorage"
import AppliedJob from "../components/AppliedJob/AppliedJob"

const AppliedRoute = () => {
  const [applied, setApplied] = useState([])

  const jobs = useLoaderData()
  useEffect(() => {
    const storedJobs = getJobApplications()
    if (jobs.length > 0) {
      const appliedJobs = jobs.filter((job) => storedJobs.includes(job.id))
      setApplied(appliedJobs)
    }
  }, [jobs])

  console.log(applied)

  return (
    <div className="container mx-auto px-5 my-10">
      <h1 className="text-3xl text-center font-bold mb-4">Applied Jobs</h1>
      <div className="flex justify-end mb-5">
        <select className="select w-full max-w-xs bg-neutral-content text-black text-base font-normal">
          <option
            disabled
            selected
          >
            Filter By
          </option>
          <option>Title</option>
          <option>Date</option>
          <option>Company</option>
          <option>Salary</option>
          <option>Name</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {applied.map((job) => (
          <AppliedJob
            key={job.id}
            job={job}
          />
        ))}
      </div>
    </div>
  )
}

export default AppliedRoute
