import { Navigate } from "react-router-dom";


const RutasProtegidas = ({children}) => {
   //dada alguna logica entoncces mostrar las rutas del admin
   const administrador = JSON.parse(sessionStorage.getItem('usuarioRollingCoffe')) || null;
   //no hay un usuario logueado
   if(!administrador){
    //si no es admin, lo envio al login
    return <Navigate to={'/maquetadoLogin'}></Navigate>
   }else{
    return children
   };
};

export default RutasProtegidas;