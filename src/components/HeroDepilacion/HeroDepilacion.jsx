import { FaArrowDown } from "react-icons/fa";
import DepiHombres from "../DepiHombres/DepiHombres";
import DepiMujer from "../DepiMujer/DepiMujer";
import "../HeroDepilacion/herodepilacion.css";

function HeroDepilacion() {
  return (
    <div className="container-depi">
      <h2>
        ¡Depilación <span>definitiva</span> Soprano <span>Ice</span>!
      </h2>

      <div className="description-depi">
        <p>
          La depilación definitiva con Soprano Ice es un avanzado tratamiento de
          eliminación de vello que utiliza la tecnología láser de diodo. A
          diferencia de otros métodos de depilación, el sistema Soprano Ice es
          conocido por ser prácticamente indoloro y seguro para diversos tipos
          de piel y vello. Funciona emitiendo pulsos de energía láser que son
          absorbidos por el pigmento del folículo piloso, lo que debilita
          gradualmente el vello y evita su regeneración.
        </p>
      </div>
      <div className="lista-mujer-hombre">
        <h2 id="h2-hombre">¡Para ellos!</h2>
        <FaArrowDown className="arrow-hombre" size={"1.7rem"} />
        <DepiHombres />
        <h2 id="h2-mujer">¡Para ellas!</h2>
        <FaArrowDown className="arrow-mujer" size={"1.7rem"} />
        <DepiMujer />
      </div>
    </div>
  );
}

export default HeroDepilacion;
