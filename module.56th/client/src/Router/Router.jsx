import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import Error from "../Pages/Error"
import AddCoffee from "../components/Coffees/AddCoffee"
import UpdateCoffee from "../components/Coffees/UpdateCoffee"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updatecoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
])

export default router
