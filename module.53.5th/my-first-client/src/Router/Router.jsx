import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Phones from "../components/Phone/Phones"
import Phone from "../components/Phone/Phone"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch("http://localhost:3000/phones"),
      },
      {
        path: "/phone/:id",
        element: <Phone />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/phone/${params.id}`),
      },
    ],
  },
])

export default router
