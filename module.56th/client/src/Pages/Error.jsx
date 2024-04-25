import error from "../assets/404.png"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center">
        <img
          className="w-[80%] h-[80%]"
          src={error}
          alt="error"
        />
      </div>
      <Footer />
    </div>
  )
}

export default Error
