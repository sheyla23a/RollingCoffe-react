import error404 from "../../assets/error404.png";
import { Button, Container } from "react-bootstrap";

const Error404 = () => {
  return (
    <section id="contenedorError">
      <img src={error404} alt="error 404" className="img-fluid"></img>
      <Button className="my-1 btnError404 fs-1">
        Volver <i className="bi bi-house-door-fill"></i>
      </Button>
    </section>
  );
};

export default Error404;
