import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  const { id, nombreProducto, descripcion, precio,imagen } = producto;

  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: "100%" }} className="mb-3">
        <Card.Img variant="top" src={producto.imagen} alt={producto.nombreProducto} />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>
            Descripción:{producto.descripcion} <br />
            <b>Precio: ${producto.precio}</b>
          </Card.Text>
          <Card.Footer className="d-flex justify-content-end">
            <Link className="btn btn-success me-2 " to={'/detalleProducto/'+ producto._id}>Ver más</Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
