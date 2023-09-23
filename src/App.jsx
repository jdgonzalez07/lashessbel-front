import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutMain from "./pages/Layouts/LayoutMain";
import Home from "./pages/Home/Home";
import Pestañas from "./pages/Pestañas/Pestañas";
import Depilacion from "./pages/Depilacion/Depilacion";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/pestañas",
          element: <Pestañas />,
        },
        {
          path: "/depilacion",
          element: <Depilacion />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
{
  /* <>
      <Navbar />
      <Hero />
      <Footer />
    </> */
}
