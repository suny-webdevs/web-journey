import PropTypes from "prop-types"

const Facility = ({ facility }) => {
  const { icon, title, desc } = facility

  return (
    <div>
      <img
        src={icon}
        alt={title}
      />
      <h2 className="text-4xl text-[#331A15] font-rancho mt-4 mb-1">{title}</h2>
      <p className="text-base font-medium font-raleway">{desc}</p>
    </div>
  )
}

Facility.propTypes = {
  facility: PropTypes.object,
}

export default Facility
