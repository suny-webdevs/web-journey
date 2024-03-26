import { useEffect, useState } from "react"
import Titlebar from "../Titlebar/Titlebar"
import Category from "../Category/Category"
import Styles from "../Style"

const Categories = () => {
  const [categories, setCategories] = useState([])
  const { categoriesSection } = Styles

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, [])

  return (
    <div>
      <Titlebar title={"Job Category List"} />
      <div className={categoriesSection}>
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
