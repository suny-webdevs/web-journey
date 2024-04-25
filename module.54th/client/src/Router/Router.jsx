import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Users from "../components/Users/Users"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
])

export default router
