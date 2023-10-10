import infoHombres from "../../../infoDepilacion/infoHombres";
import "../DepiHombres/depihombres.css";

function DepiHombres() {
  return (
    <div className="container-depiHombres">
      {infoHombres.map((item, index) => (
        <div key={index} className="info-depi-hombres">
          <h4 className="title-depi-hombres">{item.title}</h4>
          <p className="zone-depi-hombres">{item.zones}</p>
          <p className="price-depi-hombres">Precio: <span>${item.price}</span></p>
        </div>
      ))}
    </div>
  );
}

export default DepiHombres;
