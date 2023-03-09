import React from "react"
import ReactDOM from "react-dom/client"

// 1 - configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Product01/Home"
import Contact from "./pages/Contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)
