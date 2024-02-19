import { Table, Button, Container } from "react-bootstrap";
import { useEffect,useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";


const Administrador = () => {
  const [Productos,setProductos] = useState ([]);

  useEffect(()=>{
   leerProductosAPI()
  }, [])


  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="my-4">Productos Disponibles</h2>
        <Button>
        <i className="bi bi-pencil-square"></i>
        </Button>
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
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button className="m-1" variant="warning">
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button className="m-1" variant="danger">
                <i className="bi bi-trash3-fill"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
