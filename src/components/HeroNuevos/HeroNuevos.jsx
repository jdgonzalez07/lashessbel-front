import React, { useState } from "react";
import "./heroNuevos.css";
import nuevosServicios from "../../../infoNuevosServicios/nuevosServicios";
import criolipolisis from "../../../infoNuevosServicios/criolipolisis";

function HeroNuevos() {
  const [isOpenNuevos, setIsOpenNuevos] = useState(
    new Array(nuevosServicios.length).fill(false)
  );
  const [showImageNuevos, setShowImageNuevos] = useState(
    new Array(nuevosServicios.length).fill(false)
  );

  const [isOpenCriolipolisis, setIsOpenCriolipolisis] = useState(
    new Array(criolipolisis.length).fill(false)
  );
  const [showImageCriolipolisis, setShowImageCriolipolisis] = useState(
    new Array(criolipolisis.length).fill(false)
  );

  const handleTogglePrice = (index, serviceType) => {
    if (serviceType === "nuevosServicios") {
      const newIsOpen = [...isOpenNuevos];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpenNuevos(newIsOpen);
    } else if (serviceType === "criolipolisis") {
      const newIsOpen = [...isOpenCriolipolisis];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpenCriolipolisis(newIsOpen);
    }
  };

  const handleToggleImage = (index, serviceType) => {
    if (serviceType === "nuevosServicios") {
      const newShowImage = [...showImageNuevos];
      newShowImage[index] = !newShowImage[index];
      setShowImageNuevos(newShowImage);
    } else if (serviceType === "criolipolisis") {
      const newShowImage = [...showImageCriolipolisis];
      newShowImage[index] = !newShowImage[index];
      setShowImageCriolipolisis(newShowImage);
    }
  };

  return (
    <div className="container-nuevos">
      {nuevosServicios.map((item, index) => (
        <div key={index} className="container-info-nuevo">
          <h2>{item.title}</h2>
          <h4>¿Para qué me puede servir? 🤔</h4>
          {item.description.map((description, index) => (
            <ul key={index}>
              <li>{description}</li>
            </ul>
          ))}
          <div className="container-btn-new">
            <button
              className="price-new"
              onClick={() => handleTogglePrice(index, "nuevosServicios")}
            >
              {isOpenNuevos[index] ? "Cerrar" : "Ver precio y zonas"}
            </button>
            <button
              className="price-new"
              onClick={() => handleToggleImage(index, "nuevosServicios")}
            >
              {showImageNuevos[index] ? "Cerrar imagen" : "Mostrar imagen"}
            </button>
          </div>
          {isOpenNuevos[index] && (
            <div className={`container-price ${isOpenNuevos[index] ? "active" : ""}`}>
              <h3>Precios:</h3>
              <h4>{item.price}</h4>
              <hr />
              <h3>Zonas:</h3>

              {item.zones.map((zone, subIndex) => (
                <ul key={subIndex}>
                  <li>{zone}</li>
                </ul>
              ))}
            </div>
          )}
          {showImageNuevos[index] && (
            <div
              className={`container-price ${showImageNuevos[index] ? "active" : ""}`}
            >
              <img src={item.src} alt="" />
            </div>
          )}
        </div>
      ))}

      {criolipolisis.map((crio, index) => (
        <div key={index} className="container-info-nuevo">
          <h2>{crio.title}</h2>
          <h4>¿Para qué me puede servir? 🤔</h4>
          {crio.description.map((description, index) => (
            <ul key={index}>
              <li>{description}</li>
            </ul>
          ))}
          <div className="container-btn-new">
            <button
              className="price-new"
              onClick={() => handleTogglePrice(index, "criolipolisis")}
            >
              {isOpenCriolipolisis[index] ? "Cerrar" : "Ver precio y zonas"}
            </button>
            <button
              className="price-new"
              onClick={() => handleToggleImage(index, "criolipolisis")}
            >
              {showImageCriolipolisis[index] ? "Cerrar imagen" : "Mostrar imagen"}
            </button>
          </div>
          {isOpenCriolipolisis[index] && (
            <div
              className={`container-price-crio ${
                isOpenCriolipolisis[index] ? "active" : ""
              }`}
            >
              <h3>Precios:</h3>
              {crio.price.map((price, subIndex) => (
                <ul className="zonas-crio" key={subIndex}>
                  <li>{price}</li>
                </ul>
              ))}
              <hr />
              <h3>Zonas:</h3>
              {crio.zones.map((zone, subIndex) => (
                <ul key={subIndex}>
                  <li>{zone}</li>
                </ul>
              ))}
            </div>
          )}
          {showImageCriolipolisis[index] && (
            <div
              className={`container-price ${showImageCriolipolisis[index] ? "active" : ""}`}
            >
              <img src={crio.src} alt="" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HeroNuevos;
