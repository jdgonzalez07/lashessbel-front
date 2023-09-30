import "../HeroPestañas/heropestañas.css";
import { FaArrowDown } from "react-icons/fa";
import CardsPestañas from "../CardsPestañas/CardsPestañas.jsx";

function HeroPestañas() {
  return (
    <div className="container-pestañas">
      <p>Servicio de  <strong>pestañas</strong> y <strong>cejas</strong> que ofrecemos</p>
      <div className="arrows">
        <FaArrowDown size={"1.5rem"} />
        <FaArrowDown size={"1.5rem"} />
        <FaArrowDown size={"1.5rem"} />
      </div>

      <CardsPestañas />
    </div>
  );
}

export default HeroPestañas;
