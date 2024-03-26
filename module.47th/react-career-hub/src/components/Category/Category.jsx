import PropTypes from "prop-types"
import Styles from "../Style"

const Category = ({ category }) => {
  const { logo, category_name, availability } = category
  const { categoryCard } = Styles
  return (
    <div className="mb-5">
      <div className={categoryCard}>
        <div className="flex justify-start mb-2">
          <img
            src={logo}
            className=""
          />
        </div>
        <h3 className="text-lg font-bold">{category_name}</h3>
        <p className="text-base text-[#A3A3A3] font-medium">{availability}</p>
      </div>
    </div>
  )
}

Category.propTypes = {
  category: PropTypes.object,
}

export default Category
