import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import Login from "../components/Login/Login"
import SignUp from "../components/SignUp/SignUp"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <SignUp />,
      },
    ],
  },
])
