import { useEffect, useState } from "react"
import News from "./News"

const Newses = () => {
  const [newses, setNewses] = useState([])

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewses(data))
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold">Dragon news home</h2>
      <div className="flex flex-col gap-5 mt-3">
        {newses.map((news) => (
          <News
            key={news._id}
            news={news}
          />
        ))}
      </div>
    </div>
  )
}

export default Newses
