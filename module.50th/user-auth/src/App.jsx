import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

function App() {
  return (
    <>
      <div className="container mx-auto px-5 md:px-0">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
