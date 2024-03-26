import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeRoute from "./Routes/Home.route.jsx"
import ErrorRoute from "./Routes/Error.route.jsx"
import JobDetails from "./Routes/JobDetails.jsx"
import AppliedRoute from "./Routes/Applied.route.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/job/:id",
        loader: () => fetch("jobs.json"),
        element: <JobDetails />,
      },
      {
        path: "/applied",
        loader: () => fetch("jobs.json"),
        element: <AppliedRoute />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
