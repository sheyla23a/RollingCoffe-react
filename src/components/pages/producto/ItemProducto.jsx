import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, leerProductosAPI } from "../../../helpers/queries";
import { Link } from "react-router-dom";

const ItemProducto = ({producto, setProductos}) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el producto?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //agregar la logica si quiero borrar
        const respuesta = await borrarProductoAPI(producto._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Producto eliminado",
            text: `El producto "${producto.nombreProducto}" fue eliminado correctamente.`,
            icon: "success",
          });
          //actualizar la tabla de productos
          const listaProductos = await leerProductosAPI();
          setProductos(listaProductos);

        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El producto "${producto.nombreProducto}" no fue eliminado correctamente.`,
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <tr>
      <td className="text-center">{producto._id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center w-25 h-25">
        <img
          src={producto.imagen}
          className="img-thumbnail img-fluid"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Link to={`/administrador/editar/${producto.id}`} className="me-lg-2 btn btn-warning">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
