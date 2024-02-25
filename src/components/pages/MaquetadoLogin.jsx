import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function MaquetadoLogin() {
  return (
    <Container className="my-5">
      <Card>
        <Card.Header>
          <h4>{"Login"}</h4>{" "}
        </Card.Header>

        <Card.Body>
            <Form.Label>Email</Form.Label>
          <Card.Text>
            <Form.Control type="email" placeholder="name@example.com" />
          </Card.Text>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Card.Text>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Card.Text>
          <Button variant="primary">Ingresar</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MaquetadoLogin;
