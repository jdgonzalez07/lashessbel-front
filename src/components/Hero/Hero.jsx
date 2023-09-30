import CarouselComponent from "../Carousel/CarouselComponent";
import "../Hero/hero.css";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <div className="container-hero">
      <h3>¡Bienvenidas/os a Lashess Bel!</h3>
      <div className="description-hero">
        <p>
          ¡Descubre la belleza que está a tu alcance en nuestro exclusivo salón
          de belleza! En nuestra página de servicios de pestañas, cejas y
          depilación, te ofrecemos una experiencia de transformación
          personalizada. Desde las últimas tendencias en extensiones de pestañas
          y perfeccionamiento de cejas hasta la suavidad de la depilación,
          nuestro equipo de expertos está listo para resaltar tu belleza
          natural.
        </p>
      </div>
      <h3>Un poco de nuestro trabajo</h3>
      <FaArrowDown size={"1.5rem"} />
      <CarouselComponent />
    </div>
  );
}

export default Hero;
