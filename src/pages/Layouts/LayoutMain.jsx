
import NavbarMain from "../../components/Navbar/NavbarMain";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";


function LayoutMain() {
  return (
    <>
      <NavbarMain />
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutMain;
