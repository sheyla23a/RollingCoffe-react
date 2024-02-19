import cafe from "../../assets/cafe.jpg";
import { Image, Row, Col, Container } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="d-flex mt-5">
      <section >
        <Image src={cafe} alt="cafe" fluid id="imgDetalle"></Image>
      </section>
      <section className="ms-3">
        <h3 className="m-3">Batido Oreo Bliss</h3>
        <hr />
        <p className="m-3">
        "Disfruta de la perfecta armonía entre el intenso sabor del café y la suavidad de la leche en nuestra irresistible taza de café con leche. Elaborado con granos de café cuidadosamente seleccionados y una mezcla de leche cremosa, nuestro café con leche ofrece una experiencia indulgente y reconfortante. Su equilibrio único entre robustez y dulzura te envolverá en una mezcla exquisita de sabores, creando la bebida ideal para cualquier momento del día. Déjate cautivar por la calidez reconfortante de nuestro café con leche, una deliciosa pausa que eleva tus sentidos y te sumerge en la verdadera esencia de la tradición cafetera."
        </p>
         <h5 className="ms-3">Categoria: Infusiones</h5>
         <h5 className="ms-3">Precio: $1200</h5>
      </section>
    </Container>
  );
};

export default DetalleProducto;
