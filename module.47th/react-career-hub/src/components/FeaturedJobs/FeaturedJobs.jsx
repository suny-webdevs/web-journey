import { useEffect, useState } from "react"
import Titlebar from "../Titlebar/Titlebar"
import FeaturedJob from "../FeaturedJob/FeaturedJob"
import Styles from "../Style"

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([])
  const { btnWide } = Styles
  const [dataLength, setDataLength] = useState(4)

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data))
  }, [])
  return (
    <div className="mb-20">
      <Titlebar title={"Featured Jobs"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJob
            key={job.id}
            job={job}
          />
        ))}
      </div>
      <div
        className={
          dataLength === jobs.length ? "hidden" : "flex justify-center mt-7"
        }
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className={btnWide}
          type="button"
        >
          See All Jobs
        </button>
      </div>
    </div>
  )
}

export default FeaturedJobs
