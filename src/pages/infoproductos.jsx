import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import cuadernoPsico from 'media/carruselProductos/cuadernoPsico.png';
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';

const InfoProductos =() =>{


    return(
        <div className="infoProductos">
            <PrivateRoute>
                <body>
                <HeaderP linkModulo= '/listadoProductos' nombreModulo = "Administración de Productos"/>

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
                        <Footer />
                </body>
            </PrivateRoute>
        </div>
    );
}
export default InfoProductos;