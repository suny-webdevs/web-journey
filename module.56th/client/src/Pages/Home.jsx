import { Helmet } from "react-helmet-async"
import Banner from "../components/Banner/Banner"
import Facilities from "../components/Facilities/Facilities"
import Coffees from "../components/Coffees/Coffees"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Espresso Emporium</title>
      </Helmet>
      <Banner />
      <Facilities />
      <Coffees />
    </div>
  )
}

export default Home
