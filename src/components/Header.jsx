/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import {Link} from 'react-router-dom';

const Header = () => {
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
                    <Link to='/'>
                        <li>
                            <div> 
                                <img className="boton logo" src={logoPrana} alt= "imagen" /> 
                            </div>
                        </li>
                    </Link>

                    <li>
                        <div className="buscar">
                            <input placeholder ="Buscar"/>
                            <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                        </div>
                    </li>
                    <li className ="boton tituloSeccionPagina"><Link to='/' className="link">Home</Link></li>
                    <li>
                            <div className = "botonUsuario">
                                    <span className="nombreUsuario"><Link to='/login' className="link">Ingresar/Registrar</Link></span>
                                    <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                            </div>
                    </li>
                    
                </ul>
            </header>

};
export default Header 