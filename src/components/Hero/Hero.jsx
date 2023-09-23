
import CarouselComponent from "../Carousel/CarouselComponent";
import "../Hero/hero.css";
import { FaArrowDown } from 'react-icons/fa';

function Hero() {
  return (
    <div className="container-hero">
      <h3>¡Bienvenidas/os a Lashess Bel!</h3>
      <div className="description-hero">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          dolores et modi hic sit quas, asperiores expedita suscipit, doloremque
          dicta voluptatum? Nobis porro similique ullam qui, id vel enim
          quae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          ratione maiores fugiat beatae autem eum, iusto nesciunt veritatis
          ducimus quod. Quas nostrum, rem quidem officia nisi quaerat similique
          quis aut!Lorem
        </p>
      </div>
      <h3>Un poco de nuestro trabajo</h3>
      <FaArrowDown size={"1.5rem"} />
      <CarouselComponent/>
    </div>
  );
}

export default Hero;
