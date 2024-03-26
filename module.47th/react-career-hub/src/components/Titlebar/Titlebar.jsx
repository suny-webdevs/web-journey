import PropTypes from "prop-types"

const Titlebar = ({ title }) => {
  return (
    <div className="my-10">
      <h1 className="text-5xl text-[#1A1919] text-center font-extrabold mb-4">
        {title}
      </h1>
      <p className="text-[#757575] text-base text-center font-medium">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
    </div>
  )
}

Titlebar.propTypes = {
  title: PropTypes.string,
}

export default Titlebar
