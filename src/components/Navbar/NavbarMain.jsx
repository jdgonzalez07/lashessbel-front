import { useState } from "react";
import "../Navbar/navbar.css";
import { Link as Anchor, NavLink } from "react-router-dom";

function NavbarMain() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <NavLink to={"/"} className="active">
          Inicio
        </NavLink>
        <NavLink to={"/pestañas"} className="active">
          Pestañas
        </NavLink>
        <NavLink to={"/depilacion"} className="active">
          Depilación
        </NavLink>
        <NavLink to={"/nuevos-servicios"} className="active">
          Nuevos servicios
        </NavLink>
      </div>
      <div className="mobile-menu">
        <button onClick={toggleMenu} className="menu-button">
          ☰
        </button>
        {isOpen && (
          <div className="menu-dropdown">
            <NavLink to={"/"} className="active">
              Home
            </NavLink>
            <NavLink to={"/pestañas"} className="active">
              Pestañas
            </NavLink>
            <NavLink to={"/depilacion"} className="active">
              Depilación
            </NavLink>
            <NavLink to={"/nuevos-servicios"} className="active">
              Nuevos servicios
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarMain;
