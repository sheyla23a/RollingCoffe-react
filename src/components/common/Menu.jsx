import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/coffee_Logo.png'
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Menu = ({usuarioLogueado,setUsuarioLogueado}) => {
  const navegacion = useNavigate()
  const logout = ()=>{
    //limpiar sessionStorage
    sessionStorage.removeItem("usuarioRollingCoffe")
    //actualizar State
    setUsuarioLogueado('');
    navegacion("/")
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" >
            <img src={logo} alt="Logo de RollingCoffe" className='img-fluid' width={170} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link"to="/">Inicio</NavLink>
            {
              (usuarioLogueado !== '')?(
                <>
                <NavLink  end className="nav-link" to="/administrador">Administrador</NavLink>
                <Button className='nav-link' variant='link' onClick={logout}>logout</Button>
                </>
              ):(
                <>
                <NavLink  end className="nav-link" to="/registro">Registro</NavLink>
                <NavLink  end className="nav-link" to="/maquetadoLogin">Login</NavLink>
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
