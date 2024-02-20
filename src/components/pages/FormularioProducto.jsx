import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const formularioProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const productoValidado = (producto) => {
    console.log(producto);
  };

  return (
    <Container className="mt-4">
      <h1>Nuevo Producto</h1> <hr />
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
                value: 2,
                message:
                  "El precio del producto debe tener como minimo dos caracteres",
              },
              maxLength: {
                value: 4,
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
            placeholder="URL"
            {...register("imagen", {
              required: "La URL del producto es obligatoria",
              minLength: {
                value: 15,
                message:
                  "La URL del producto debe tener como minimo 15 caracteres",
              },
              maxLength: {
                value: 3000,
                message:
                  "La URL del producto debe tener como maximo 3000 caracteres",
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
            aria-label=""
            {...register("categoria", {
              required: "La categoria del producto es obligatoria",
            })}
          >
            <option disabled>--Seleccionar opcion</option>
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
                value: 30,
                message:
                  "La descripcion del producto debe tener como maximo 30 caracteres",
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
                value: 20,
                message:
                  "La descripcion del producto debe tener como minimo 20 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "La descripcion del producto debe tener como maximo 50 caracteres",
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
