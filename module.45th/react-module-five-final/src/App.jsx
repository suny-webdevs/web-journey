import { Outlet, useNavigation } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  const navigation = useNavigation()

  return (
    <>
      <Header />
      <div>
        {navigation.state === "loading" ? (
          <div className="w-full h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
