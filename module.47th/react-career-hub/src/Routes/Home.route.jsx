import Banner from "../components/Banner/Banner"
import Categories from "../components/Categories/Categories"
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs"

const HomeRoute = () => {
  return (
    <div className="container mx-auto px-5 md:px-0 lg:px-0">
      <Banner />
      <Categories />
      <FeaturedJobs />
    </div>
  )
}

export default HomeRoute
