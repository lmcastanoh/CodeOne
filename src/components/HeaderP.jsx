/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import useActiveRoute from 'hooks/useActiveRoute';

const HeaderP = ({nombreModulo, linkModulo}) => {
    const { user , logout } = useAuth0();
    const cerrarSesion =()=> {
        logout({returnTo: 'http://localhost:3000/listadoProductos'})
    localStorage.setItem('token', null)
    }
    const Ruta = ({ ruta, nombre, usuario})=>{
        console.log('usuario', usuario);
        const isActive = useActiveRoute(ruta);
        return(
            <span  to ={ruta}>
                {usuario ? <>{usuario.name}</>: 
                <>{nombre}</> }
            </span>
        )
    }

    return(
        <header> 
        <ul className="barraRedes">
            <li><i className="fas fa-palette"></i></li>
            <div className= "icoRedes">
                <li><i className=" fab fa-facebook"></i></li>
                <li><i className=" fab fa-instagram"></i></li>
                <li><i className="fab fa-whatsapp"></i></li>
            </div>
        </ul>
        <ul className="navbar">
            <li>
                <div> 
                    <Link to = "/" className ="link"><img className="boton logo" src={logoPrana} alt= "imagen" /></Link>
                </div>
            </li>

            <li>
                <div className="buscar">
                    <input placeholder ="Buscar Productos"/>
                    <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                </div>
            </li>
            <li className ="boton tituloSeccionPagina"><Link to = {linkModulo} className ="link">{nombreModulo}</Link></li>
            <li>
                <div className = "botonUsuario">
                    <div>
                        <span  className="nombreUsuario letraIniciarSesion"><Ruta ruta='/listadoProductos/perfil' nombre ='Perfil' usuario ={user} /> </span>
                    </div>
                    <div className ="tablaCerrarSesion"> 
                        <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                        <span onClick={() => cerrarSesion()} className=" letraCerrarSesion">Cerrar Sesión</span>
                    </div>
                </div>
            </li>
        </ul>
    </header>  
    )};
export default HeaderP;