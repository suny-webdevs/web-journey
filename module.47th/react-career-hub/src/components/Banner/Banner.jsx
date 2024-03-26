import Styles from "../Style"
import UserImg from "../../assets/images/user.png"

const Banner = () => {
  const { btnMd, textGradient } = Styles
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={UserImg}
            className="max-w-sm lg:max-w-xl"
          />
          <div>
            <h1 className="text-3xl lg:text-7xl font-extrabold leading-10">
              One Step <br className="hidden md:flex" /> Closer To Your{" "}
              <br className="hidden md:flex" />{" "}
              <span className={textGradient}>Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the{" "}
              <br className="hidden md:flex" /> information you need. Its your
              future. Come find it. Manage all <br className="hidden md:flex" />{" "}
              your job application from start to finish.
            </p>
            <button className={btnMd}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
