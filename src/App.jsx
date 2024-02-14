import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from "./components/common/Footer";
import Menu from './components/common/Menu'
import Error404 from './components/pages/Error404'
import Administrador from './components/pages/Administrador'
import Inicio from './components/pages/Inicio'
import { Container } from 'react-bootstrap';

function App() {
  return <>
  <Menu></Menu>
  <Container className='contenedorInicial container-fluid'>

  </Container>
  {/* <Inicio></Inicio> */}
  {/* <Administrador></Administrador>   */}
   {/* <Error404></Error404>  */}
  <Footer></Footer>
  </>;
}

export default App;
