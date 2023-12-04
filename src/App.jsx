import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutMain from "./pages/Layouts/LayoutMain";
import Home from "./pages/Home/Home";
import Pestañas from "./pages/Pestañas/Pestañas";
import Depilacion from "./pages/Depilacion/Depilacion";
import Detail from "./pages/Detail/Detail";
import NuevosServicios from "./pages/Nuevos-productos/NuevosServicios";


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
          path: "/:id",
          element: <Detail />,
        },
        {
          path: "/depilacion",
          element: <Depilacion />,
        },
        {
          path: "/nuevos-servicios",
          element: <NuevosServicios />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

