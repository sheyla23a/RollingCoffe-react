import batido from "../../assets/batido_oreo.jpg";
import { Image, Row, Col } from "react-bootstrap";

const DetalleProducto = () => {
  
  return (
    
    <Row className="fila my-5">
      <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col ">
      <Image src={batido} alt="batido" fluid id="imgDetalle" ></Image>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="col "> 
        <h3 className="m-3">Batido Oreo Bliss</h3>
        <p className="m-3">
        Sumérgete en la deliciosa experiencia de nuestro Batido Oreo Bliss. Una combinación irresistiblemente suave de helado de vainilla y galletas Oreo trituradas, este batido ofrece el equilibrio perfecto entre lo cremoso y lo crujiente. Servido con un toque de crema batida y trozos adicionales de Oreo, cada sorbo es una indulgencia rápida pero inolvidable. ¿Listo para un festín de sabores? ¡El Batido Oreo Bliss te espera en nuestra cafetería!
        </p>
        </Col>
      </Row>
  );
};

export default DetalleProducto;