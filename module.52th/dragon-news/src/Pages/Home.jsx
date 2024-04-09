import Header from "../components/Header/Header"
import LatestNews from "../components/LatestNews/LatestNews"
import LeftSideNavbar from "../components/Navbar/LeftSideNavbar"
import Navbar from "../components/Navbar/Navbar"
import RightSideNavbar from "../components/Navbar/RightSideNavbar"
import Newses from "../components/News/Newses"

const Home = () => {
  return (
    <div className="mb-5">
      <Header />
      <LatestNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
        <div>
          <LeftSideNavbar />
        </div>
        <div className="md:col-span-2">
          <Newses />
        </div>
        <div>
          <RightSideNavbar />
        </div>
      </div>
    </div>
  )
}

export default Home
