/* eslint-disable react/no-unescaped-entities */
import "./Banner.css"

const Banner = () => {
  return (
    <div className="bg-banner w-full h-dvh">
      <div className="h-full grid grid-cols-1 md:grid-cols-2">
        <div></div>
        <div className="flex flex-col justify-center h-full px-5">
          <h1 className="text-6xl text-white font-rancho">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-base text-white font-raleway font-medium mt-3 mb-6">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <div>
            <button className="btn bg-[#E3B577] hover:bg-transparent rounded-none text-2xl text-[#242222] hover:text-white font-rancho tracking-wider border border-[#E3B577] hover:border-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
