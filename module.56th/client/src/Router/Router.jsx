import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import Error from "../Pages/Error"
import AddCoffee from "../components/Coffees/AddCoffee"
import UpdateCoffee from "../components/Coffees/UpdateCoffee"
import CoffeeDetails from "../components/Coffees/CoffeeDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:4000/coffees"),
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffee/${params.id}`),
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffee/${params.id}`),
      },
    ],
  },
])

export default router
