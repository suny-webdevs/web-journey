import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import Login from "../components/Login/Login"
import SignUp from "../components/SignUp/SignUp"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "../Pages/Dashboard"
import Orders from "../components/Orders/Orders"
import Profile from "../components/Profile/Profile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
