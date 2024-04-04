import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./Routes/Routes.jsx"
import AuthContext from "./AuthContext/AuthContext.jsx"
import { HelmetProvider } from "react-helmet-async"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthContext>
  </React.StrictMode>
)
