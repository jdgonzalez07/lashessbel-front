
import imagesLashess from "../../../imagesLashess/imagesLashess.js";
import "../Carousel/carouselcomponent.css"
import { Carousel } from "react-bootstrap";


function CarouselComponent() {
  return (
    <Carousel>
      {imagesLashess.map((slice, sliceIndex) => (
        <Carousel.Item key={sliceIndex}>
          <div className="container">
            {slice.map((image, imageIndex) => (
              <div key={imageIndex} className="carousel-image-container">
                <img
                  className="img-carousel"
                  src={image.src}
                  alt={image.name}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
