import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from './components/common/Menu'
import Error404 from './components/pages/Error404'
import Administrador from './components/pages/Administrador'
import Inicio from './components/pages/Inicio'
import DetalleProducto from './components/pages/DetalleProducto'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import FormularioProducto from './components/pages/FormularioProducto';
import MaquetadoLogin from './components/pages/MaquetadoLogin';


function App() {
  const usuario = JSON.parse(sessionStorage.getItem(usuarioRollingCoffe)) || '';
  const[usuarioLogueado,setUsuarioLogueado]= useState(usuario);
 
  return <>
   
  <BrowserRouter>
  <Menu></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
      <Route exact path='*' element={<Error404></Error404>}></Route>
      <Route exact path='/DetalleProducto' element={<DetalleProducto></DetalleProducto>}></Route>
      <Route exact path='/maquetadoLogin' element={<MaquetadoLogin  setUsuarioLogueado={setUsuarioLogueado}></MaquetadoLogin>}></Route>
      <Route exact path='/FormularioProducto' element={<FormularioProducto></FormularioProducto>}></Route>
      <Route exact path='/MaquetadoLogin' element={<MaquetadoLogin></MaquetadoLogin>}></Route>
      <Route exact path='/administrador/crear' element={<FormularioProducto editar={false}></FormularioProducto>}></Route>
      <Route exact path='/administrador/editar/:id' element={<FormularioProducto editar={true}></FormularioProducto>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>

   

  {/* <Menu></Menu> */}
  {/* <Container className='contenedorInicial container-fluid'>
   
  </Container> */}
  {/* <Inicio></Inicio> */}
  {/* <Administrador></Administrador>   */}
   {/* <Error404></Error404>  */}
  {/* <Footer></Footer> */}
  </>;
}

export default App;
