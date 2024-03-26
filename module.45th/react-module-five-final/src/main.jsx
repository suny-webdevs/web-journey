import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App"
import Blogs from "./pages/Blogs"
import Bookmarks from "./pages/Bookmarks"
import Home from "./pages/Home"
import PostDetails from "./components/PostDetails/PostDetails"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles"),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/blog/:postID",
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.postID}`),
        element: <PostDetails />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
