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
      {/* <div className="direction">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.1914699622257!2d-58.389848924205644!3d-34.67511676127258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcccb9151e103d%3A0xf1ac351b9a6574b2!2sEntre%20R%C3%ADos%20356%2C%20B1868%20Pi%C3%B1eyro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1696894359499!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div> */}
    </div>
  );
}

export default Hero;
