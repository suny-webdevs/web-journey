import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./Router/Router"
import UsersContext from "./UsersContext/UsersContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersContext>
      <RouterProvider router={router} />
    </UsersContext>
  </React.StrictMode>
)
