import { Helmet } from "react-helmet-async"
import Banner from "../components/Banner/Banner"
import Facilities from "../components/Facilities/Facilities"
import Coffees from "../components/Coffees/Coffees"
import { useLoaderData } from "react-router-dom"

const Home = () => {
  const loadedCoffees = useLoaderData()

  return (
    <div>
      <Helmet>
        <title>Home - Espresso Emporium</title>
      </Helmet>
      <Banner />
      <Facilities />
      <Coffees loadedCoffees={loadedCoffees} />
    </div>
  )
}

export default Home
