import { useEffect } from "react";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Success from "./pages/success";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
