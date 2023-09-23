import "../Navbar/navbar.css";
import { Link as Anchor } from "react-router-dom";

function NavbarMain() {
  return (
    <div className="container-navbar">
      <div className="logo-and-title">
        <div className="title-navbar">
          <h3>
            <a href="#">Lashess Bel</a>
          </h3>
        </div>
      </div>
      <div className="links-navbar">
        <Anchor to={"/"}>Home</Anchor>
        <Anchor to={"/pestañas"}>Pestañas</Anchor>
        <Anchor to={"/depilacion"}>Depilación</Anchor>
      </div>
    </div>
  );
}

export default NavbarMain;
