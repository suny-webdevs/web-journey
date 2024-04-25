import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="container mx-auto px-5 md:px-0"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  )
}

export default App
