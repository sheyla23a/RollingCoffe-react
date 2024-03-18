import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import DetalleProducto from "./components/pages/DetalleProducto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioProducto from "./components/pages/FormularioProducto";
import MaquetadoLogin from "./components/pages/MaquetadoLogin";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  const usuario =
    JSON.parse(sessionStorage.getItem("usuarioRollingCoffe")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
          <Route
            exact
            path="/DetalleProducto/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
            exact
            path="/maquetadoLogin"
            element={
              <MaquetadoLogin
              setUsuarioLogueado={setUsuarioLogueado}
              ></MaquetadoLogin>
            }
          ></Route>
          <Route
            exact
            path="/FormularioProducto"
            element={<FormularioProducto></FormularioProducto>}
          ></Route>
            <Route
              exact
              path="/administrador/*"
              element={<RutasProtegidas>
                <RutasAdmin></RutasAdmin>
              </RutasProtegidas>}
            ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
