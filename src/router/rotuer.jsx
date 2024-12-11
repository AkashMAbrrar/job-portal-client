import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found 404</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
