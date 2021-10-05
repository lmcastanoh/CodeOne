import {Link} from 'react-router-dom';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import cuadernoPsico from 'media/carruselProductos/cuadernoPsico.png';
function InfoProductos() {
    return(
        <div className="infoProductos">
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
                            <li className ="boton tituloSeccionPagina"><Link to = "/listadoProductos" className ="link">Administración de Productos</Link></li>
                            <li>
                                <div className = "botonUsuario">
                                    <span className="nombreUsuario">Cerrar Sesión</span>
                                    <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                                </div>
                            </li>
                        </ul>
                    </header>  

                    <main>
                        <section>
                            <h1 className = "tituloProductos ">Informacion del Producto</h1>
                                <div className="tablaProductoImagen">
                                    <div className= "tablaproductos ">
                                        <div className = "tablaproductos letraEncabezado">Producto</div>
                                        <div className = "tablaproductos cuadroTablaInfoProducto " >Tamaño Carta</div>

                                        <div className = "tablaproductos letraEncabezado ">ID</div>
                                        <div className = "tablaproductos cuadroTablaInfoProducto  ">0001</div>
                
                                        <div className = "tablaproductos letraEncabezado ">valor unitario</div>
                                        <div className = "tablaproductos cuadroTablaInfoProducto " >$45.000-$60.000</div>
                
                                        <div className = "tablaproductos letraEncabezado">Estado</div>
                                        <div className = "tablaproductos cuadroTablaInfoProducto " >Disponible</div>
                
                                        <div className = "tablaproductos letraEncabezado " >Descripcion</div>
                                        <div className = "tablaproductos cuadroTablaInfoProducto" >Cuaderno en madera Personalizado</div>
                                    </div>
                                    <div>
                                        <img className="imCuaderno" src={cuadernoPsico} alt= "imagen" />
                                    </div>                 
                                </div> 
                        </section>
                        <div className ="centrar">
                            <section>
                                <ul >
                                    <li>
                                        <h4 className = "botonInfoProductos botonModulos centrar">
                                            <span className = "letraBotonInfoProducto">Editar</span>
                                        </h4>
                                    </li>
                                </ul>
                            </section>
                            <section>
                                <ul>
                                    <li>
                                        <h4 className = "botonInfoProductos botonModulos centrar">
                                            <span >Eliminar</span>
                                        </h4>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </main>
                    <footer>
                        <img className ="logoCodeOne" src={logoCodeOne} alt ="logoCodeOne"/>
                    </footer>
            </body>
        </div>
    );
}
export default InfoProductos;
