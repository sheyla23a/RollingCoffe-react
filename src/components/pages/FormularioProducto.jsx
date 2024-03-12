import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearProductoAPI, editarProductoAPI, obtenerProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const formularioProducto = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const { id } = useParams();
  const navegation = useNavigate()
  //  console.log(id)
  useEffect(() => {
    if (editar) {
      //invocar a una funcion que devuelva un producto con el id del parametro
      cargarDatosProducto();
    }
  }, []);

  const cargarDatosProducto = async () => {
    try {
      const respuesta = await obtenerProductoAPI(id);
      if (respuesta.status === 200) {
        const productoEncontrado = await respuesta.json();
       //quiero cargar el producto encontrado en el formulario
       setValue('nombreProducto',productoEncontrado.nombreProducto);
       setValue('precio',productoEncontrado.precio);
       setValue('categoria',productoEncontrado.categoria);
       setValue('descripcionBreve',productoEncontrado.descripcionBreve);
       setValue('descripcionAmplia',productoEncontrado.descripcionAmplia);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const productoValidado = async (producto) => {
    console.log(producto);
    if (editar) {
      //agregar la logica de editar
      console.log('aqui tengo que editar');
      //tomar los datos del producto validado y enviarlo a la api para actualizar
     const respuesta = editarProductoAPI(producto,id);
     if(respuesta.status === 200){
      Swal.fire({
        title: "Producto editado!",
        text: `El producto "${producto.nombreProducto}" fue editado correctamente`,
        icon: "success",
      });
      //redirecccionar a la pagina administrador 
      navigator('/administrador')
     }else{
      Swal.fire({
        title: "Ocurrio un error ",
        text: `El producto "${producto.nombreProducto}" no pudo ser editado.Intente esta operación en unos minutos`,
        icon: "error",
      });
     }
    } else {
      //solicitar a la api guardar un producto nuevo
      const respuesta = await crearProductoAPI(producto);
      if (respuesta.status === 201) {
        //se creo el producto
        Swal.fire({
          title: "Producto creado!",
          text: `El producto "${producto.nombreProducto}" fue creado correctamente`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error ",
          text: `El producto "${producto.nombreProducto}" no pudo ser creado.Intente esta operación en unos minutos`,
          icon: "error",
        });
      }
    }
  };

  return (
    <Container className="mt-4">
      <h1>{titulo}</h1> <hr />
      <Form className="my-4" onSubmit={handleSubmit(productoValidado)}>
        <Form.Group className="mb-3" controlId="formProdu">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre del producto debe tener como minimo dos caracteres",
              },
              maxLength: {
                value: 25,
                message:
                  "El nombre del producto debe tener como maximo 25 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio *</Form.Label>
          <Form.Control
            type="number"
            placeholder="Precio"
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              minLength: {
                value: 50,
                message:
                  "El precio del producto debe tener como minimo dos caracteres",
              },
              maxLength: {
                value: 10000,
                message:
                  "El precio del producto debe tener como maximo 4 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUrl">
          <Form.Label>Imagen URL *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/cafe-restaurante-1230679/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCateg">
          <Form.Label>Categoria *</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria del producto es obligatoria",
            })}
          >
            <option value="">--Seleccionar opcion</option>
            <option value="Infusion">Infusion</option>
            <option value="Bebida Fria">Bebida fria</option>
            <option value="Batidos">Batidos</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescrip">
          <Form.Label>Descripcion Breve *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descripcion Breve"
            as="textarea"
            rows={2}
            {...register("descripcionBreve", {
              required: "La descripcion del producto es obligatoria",
              minLength: {
                value: 10,
                message:
                  "La descripcion del producto debe tener como minimo 10 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "La descripcion del producto debe tener como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripAmplia">
          <Form.Label>Descripcion Amplia *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("descripcionAmplia", {
              required: "La descripcion del producto es obligatoria",
              minLength: {
                value: 50,
                message:
                  "La descripcion del producto debe tener como minimo 50 caracteres",
              },
              maxLength: {
                value: 300,
                message:
                  "La descripcion del producto debe tener como maximo 300 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
        </Form.Group>

        <Button className="btnColor" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default formularioProducto;
