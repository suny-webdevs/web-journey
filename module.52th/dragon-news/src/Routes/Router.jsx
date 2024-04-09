import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Career from "../Pages/Career"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import NewsDetails from "../Pages/NewsDetails"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("../news.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
])

export default router
