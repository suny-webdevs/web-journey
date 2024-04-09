import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const LeftSideNavbar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold">All Category</h2>
      <div className="flex flex-col mt-3">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "py-3 px-10 text-lg font-medium bg-slate-200 rounded-lg"
                : "py-3 px-10 text-lg font-medium hover:bg-slate-100 rounded-lg"
            }
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default LeftSideNavbar
