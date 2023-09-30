import "../Navbar/navbar.css";
import { Link as Anchor, NavLink } from "react-router-dom";

function NavbarMain() {
  return (
    <div className="container-navbar">
      <div className="logo-and-title">
        <div className="title-navbar">
          <h3>
            <Anchor to={"/"}>Lashess Bel</Anchor>
          </h3>
        </div>
      </div>
      <div className="links-navbar">
        <NavLink to={"/"} ClassName="active">
          Home
        </NavLink>
        <NavLink to={"/pestañas"} ClassName="active">
          Pestañas
        </NavLink>
        <NavLink to={"/depilacion"} ClassName="active">
          Depilación
        </NavLink>
      </div>
    </div>
  );
}

export default NavbarMain;
