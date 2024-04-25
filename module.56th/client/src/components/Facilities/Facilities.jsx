import { useEffect, useState } from "react"
import Facility from "./Facility"

const Facilities = () => {
  const [facilities, setFacilities] = useState([])

  useEffect(() => {
    fetch("facility.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data))
  }, [])

  return (
    <div className="bg-[#ECEAE3] flex flex-col md:flex-row justify-center items-center gap-10 px-28 py-14">
      {facilities.map((facility) => (
        <Facility
          key={facility.id}
          facility={facility}
        />
      ))}
    </div>
  )
}

export default Facilities
