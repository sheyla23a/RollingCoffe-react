import { Table, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import ItemProducto from "./ItemProducto";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [Productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      setProductos(respuesta);
    } catch (error) {}
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="my-4">Productos Disponibles</h2>
        <Link className="btn btn-primary" to='/formularioProducto'>
          <i className="bi bi-pencil-square"></i>
        </Link>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead className="text-center">
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Url Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {Productos.map((producto) => (
            <ItemProducto key={producto.id} producto={producto}></ItemProducto>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
