import { Col, Card, Button } from "react-bootstrap";

const CardProducto = ({ producto }) => {
  const { id, nombreProducto, descripcion, precio,imagen } = producto;

  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: "100%" }} className="mb-3">
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombreProducto}</Card.Title>
          <Card.Text>
            Descripción:{descripcion} <br />
            <b>Precio: ${precio}</b>
          </Card.Text>
          <Card.Footer className="d-flex justify-content-end">
            <Button className="btnColor">Ver más</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
