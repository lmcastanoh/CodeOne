import {Link} from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react";
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioBlanco from "media/iconoUsuario2.png";
import iconoReciboVenta from "media/Reciboventa.png";
/* Se importa las imagenes del Carrusel*/
import fotoAlbum from 'media/carruselProductos/album.png';
import lapiceros from 'media/carruselProductos/lapiceros.png';
import cuadernoPsico from 'media/carruselProductos/cuadernoPsico.png';
import llavero from 'media/carruselProductos/llavero.png';
import mugAbogada from 'media/carruselProductos/mugAbogada.png';
import cuadernoMorado from 'media/carruselProductos/cuadernoMorado.png';
import planeador from 'media/carruselProductos/planeador.jpg';
import baseCelular from 'media/carruselProductos/baseCelular.png' ;



const Index = () => {
    const { loginWithRedirect } = useAuth0();
    return(
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
                    <li className ="boton tituloSeccionPagina"><Link to='/' className="link">Home</Link></li>
                    <li>
                            <div className = "botonUsuario">
                                    <span onClick={() => loginWithRedirect()} className="nombreUsuario">Ingresar/Registrar</span>
                                    <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                            </div>
                    </li>
                </ul>
            </header>  
            <main className = "tamañoPaginaIndex">
                <section>
                    <ul className ="botonModulos">
                        <Link to="/listadoProductos" className="link" >
                            <li><h1 className = "titulo">Productos</h1></li>
                                <li>
                                    <div className = "carruselProductos">
                                        <img className = "contenedorImagen" src= {fotoAlbum} alt="Foto Mug" />
                                        <img className = "contenedorImagen" src= {lapiceros} alt="Foto Mug" />
                                        <img className = "contenedorImagen" src= {cuadernoPsico} alt="Foto Cuaderno" /> 
                                        <img className = "contenedorImagen" src= {llavero} alt="Foto Llavero" />
                                        <img className = "contenedorImagen" src= {mugAbogada} alt="Foto Mug" />
                                        <img className = "contenedorImagen" src= {cuadernoMorado} alt="cuaderno " />
                                        <img className = "contenedorImagen" src= {planeador} alt="planeador" />
                                        <img className = "contenedorImagen" src= {baseCelular} alt="base celular" />
                                    </div>
                                </li>
                        </Link>
                    </ul>
                </section>
                <div className ="centrar">
                    <section>
                        <ul  className = "botonModulos">
                            <Link to="/listadoVentas" className="link">
                                <li>
                                    <h1 className = "titulo centrar">
                                        <img className ="reciboVenta" src={iconoReciboVenta} alt="IconoVenta" Ventas />
                                        <span>Ventas</span>
                                    </h1>
                                </li>
                            </Link>
                    
                        </ul>
                    </section>
                    <section>
                        <ul  className = "botonModulos">
                            <Link to="/listadoUsuarios" className="link">
                                <li>
                                    <h1 className = "titulo centrar">
                                        <img className ="reciboVenta" src={iconoUsuarioBlanco} alt="IconoVenta" Ventas />
                                        <span>Usuarios</span>
                                    </h1>
                                </li>
                            </Link>
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </body>
    );
}
export default Index;


