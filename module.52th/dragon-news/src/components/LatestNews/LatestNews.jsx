import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

const LatestNews = () => {
  return (
    <div>
      <div className="flex items-center gap-5 my-5 bg-slate-100 p-3">
        <button className="px-8 py-2 bg-secondary text-base text-white">
          Latest
        </button>
        <div>
          <Marquee pauseOnHover>
            <Link to="/">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Link>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
