import { Card } from "react-bootstrap";
import "../CardDetailPestañas/cardDetailPestañas.css";
import pestañasSeleccionadas from "../../../imagesLashess/pestañasSeleccionadas";
import { useParams } from "react-router-dom";

function CardDetailPestañas() {
  const { id } = useParams();

  const cardSelected = pestañasSeleccionadas.find(
    (tarjeta) => tarjeta.id === Number(id)
  );
  console.log(cardSelected.src);

  return (
    <div className="container-detail">
      <div className="card card-detail">
        <Card.Img
          variant="top"
          src={cardSelected.src}
          style={{ height: "450px", objectFit: "cover" }}
          className="img-card-detail"
        />
        <div className="card-body">
          <Card.Title className="title-detail">{cardSelected.name}</Card.Title>

          <Card.Text className="text-detail">
            {cardSelected.description}
          </Card.Text>
        </div>
      </div>
    </div>
  );
}

export default CardDetailPestañas;
