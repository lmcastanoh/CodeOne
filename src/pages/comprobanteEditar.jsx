import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";

function ComprobanteEditar() {

    return(
        <div className="comprobanteEditar">
            <body>
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
                        <li className ="boton tituloSeccionPagina"></li>
                        <li>
                            <div className = "botonUsuario">
                                <span className="nombreUsuario">Cerrar Sesión</span>
                                <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                            </div>
                        </li>
                    </ul>
                </header>

                <main className = "tamañoPaginaIndex">
                    <section>
                        <ul className="comprovante">
                            <span>¡La información ha sido actualizada correctamente!</span>
                        </ul>
                        <div className = "botonAgregarUsuario botonModulos titulo centrar" > <Link to='/' className="link"><span>Regresar</span></Link></div>
                    </section>
                </main>
                <Footer />

            </body>

        </div>
    );
}
export default ComprobanteEditar;


