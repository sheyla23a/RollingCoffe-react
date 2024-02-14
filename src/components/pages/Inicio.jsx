import banner from "../../assets/banner_def.jpg";
import cafe from "../../assets/cafe.jpg";
import te from "../../assets/te.jpg";
import batido from "../../assets/batido_oreo.jpg";
import croissant from "../../assets/croissant.jpg";
import tarta from "../../assets/lemonPie.jpg";
import cafeHelado from "../../assets/cafe_helado.jpg";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

const Inicio = () => {
  return (
    <section>
      <div id="contenBanner">
        <img
          src={banner}
          alt="banner"
          id="imgBanner"
          style={{ width: "100%" }}
        />
      </div>
      <Container>
        <h1 className="my-4 mt-5 fs-1">Nuestros Productos</h1>
        <hr />
        <Row className="mb-4">
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "100%" }} className="mb-3">
              <Card.Img variant="top" src={cafe} />
              <Card.Body>
                <Card.Title>Café americano</Card.Title>
                <Card.Text>
                  Descripción: <br />
                  <b>Precio: $1500</b>
                </Card.Text>
                <Card.Footer className="d-flex justify-content-end">
                  <Button className="btnColor">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "100%" }} className="mb-3">
              <Card.Img variant="top" src={te} />
              <Card.Body>
                <Card.Title>Té verde</Card.Title>
                <Card.Text>
                  Descripción: <br />
                  <b>Precio: $1200</b>
                </Card.Text>
                <Card.Footer className="d-flex justify-content-end">
                  <Button className="btnColor">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "100%" }} className="mb-3">
              <Card.Img variant="top" src={batido} />
              <Card.Body>
                <Card.Title>Batido Oreo</Card.Title>
                <Card.Text>
                  Descripción: <br />
                  <b>Precio: $2300</b>
                </Card.Text>
                <Card.Footer className="d-flex justify-content-end">
                  <Button className="btnColor">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "100%" }} className="mb-3">
              <Card.Img variant="top" src={croissant} />
              <Card.Body>
                <Card.Title>Croissant Nutella</Card.Title>
                <Card.Text>
                  Descripción: <br />
                  <b>Precio: $1000</b>
                </Card.Text>
                <Card.Footer className="d-flex justify-content-end">
                  <Button className="btnColor">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "100%" }} className="mb-3">
              <Card.Img variant="top" src={tarta} />
              <Card.Body>
                <Card.Title>Lemon Pie</Card.Title>
                <Card.Text>
                  Descripción: <br />
                  <b>Precio: $1500</b>
                </Card.Text>
                <Card.Footer className="d-flex justify-content-end">
                  <Button className="btnColor">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card style={{ width: "100%" }} className="mb-3">
              <Card.Img variant="top" src={cafeHelado} />
              <Card.Body>
                <Card.Title>Café Helado</Card.Title>
                <Card.Text>
                  Descripción: <br />
                  <b>Precio: $3500</b>
                </Card.Text>
                <Card.Footer className="d-flex justify-content-end">
                  <Button className="btnColor">Ver más</Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
