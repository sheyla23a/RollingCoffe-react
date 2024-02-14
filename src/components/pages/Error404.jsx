import error404 from "../../assets/error404.png";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <section id="contenedprError">
      <img src={error404} alt="error 404" className="img-fluid"></img>
      <Button className="my-4 btnError404 fs-1">
        Volver <i className="bi bi-house-door-fill"></i>
      </Button>
    </section>
  );
};

export default Error404;
