
import '../CardsPestañas/cardspestañas.css'
import pestañasSeleccionadas from '../../../imagesLashess/pestañasSeleccionadas.js'
import {  Card } from 'react-bootstrap'
import { Link as Anchor } from 'react-router-dom'

function CardsPestañas() {
  return (
    <div className="container-cardPestañas">
        {pestañasSeleccionadas.map((img, index)=>(
            <Card key={index} className="card-s m-4 cardPestaña">
            <Card.Img  style={{ height: "250px", objectFit: "cover" }} variant="top" src={img.src} />
            <Card.Body className='card-body-pestañas'>
              <Card.Title className='title-pestañas'>{img.name}</Card.Title>
              <Anchor className='btn-cards' to={`/${img.id}`} >Ver más</Anchor>
            </Card.Body>
          </Card>
        ))}
    </div>
  )
}

export default CardsPestañas