
import "../DepiMujer/depimujer.css";
import infoMujeres from "../../../infoDepilacion/infoMujeres";

function DepiMujer() {
  return (
    <div className="container-depiMujer">
      {infoMujeres.map((item, index) => (
        <div key={index} className="info-depi-mujer">
          <h4 className="title-depi-mujer">{item.title}</h4>
          <p className="zone-depi-mujer">{item.zones}</p>
          <p className="price-depi-mujer">Precio: <span>${item.price}</span> </p>
        </div>
      ))}
    </div>
  );
}

export default DepiMujer;
