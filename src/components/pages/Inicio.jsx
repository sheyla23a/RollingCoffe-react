import banner from "../../assets/banner_def.jpg";
import { Row, Container } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { leerProductosAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

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
        {productos.map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
