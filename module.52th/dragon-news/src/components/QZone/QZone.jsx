import { Link } from "react-router-dom"
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"

const QZone = () => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <Link
        to="/"
        className="mx-auto hover:transform hover:scale-y-105 transition-transform duration-200"
      >
        <img
          src={qzone1}
          alt="q-zone 1"
        />
      </Link>
      <Link
        to="/"
        className="mx-auto hover:transform hover:scale-y-105 transition-transform duration-200"
      >
        <img
          src={qzone2}
          alt="q-zone 2"
        />
      </Link>
      <Link
        to="/"
        className="mx-auto hover:transform hover:scale-y-105 transition-transform duration-200"
      >
        <img
          src={qzone3}
          alt="q-zone 3"
        />
      </Link>
    </div>
  )
}

export default QZone
