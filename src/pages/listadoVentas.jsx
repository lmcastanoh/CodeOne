import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";

const ListadoVentas=() =>{
    
    const { logout } = useAuth0();
    const cerrarSesion =()=> {
        logout({returnTo: 'http://localhost:3000/listadoProductos'})
    localStorage.setItem('token', null)
    }


    return(
        <div className="listadoVentas">
            <PrivateRoute>
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
                                    <Link to = "/" className ="link">
                                        <img className="boton logo" src={logoPrana} alt= "imagen" /> 
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="buscar">
                                    <input placeholder ="Buscar ventas"/>
                                    <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                                </div>
                            </li>
                            
                                <li className ="boton tituloSeccionPagina"><Link to = "/listadoVentas" className ="link">Administración de Ventas</Link></li>
                            
                            
                            <li>
                                <div className = "botonUsuario">
                                    <div className ="tablaCerrarSesion">
                                        <span className="nombreUsuario letraIniciarSesion">Estefania</span>
                                        <span onClick={() => cerrarSesion()} className="nombreUsuario letraCerrarSesion">Cerrar Sesión</span> 
                                    </div>
                                        <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                                </div>
                            </li>
                        </ul>
                    </header>
                        <main className= "tamañoPaginaIndex">
                            <section>
                                <h1 className = "tituloProductos">Listado de Ventas</h1>
                                <ul>
                                    <li className= "tablaListaVentas">
                                        <div className = "listadodeVentas letraEncabezado">ID Venta</div>
                                        <div className = "listadodeVentas letraEncabezado">Cliente</div>
                                        <div className = "listadodeVentas letraEncabezado">Producto</div>
                                        <div className = "listadodeVentas letraEncabezado">Estado</div>
                                        <div className = "listadodeVentas letraEncabezado">valor</div>
                                        <div className = "listadodeVentas letraEncabezado">Ver Información</div>
                                        <div className = "listadodeVentas letraEncabezado">Editar</div>
                                        <div className = "listadodeVentas letraEncabezado">Eliminar</div>
                                        

                                        <div className = "listadodeVentas cuadroTabla ">0001</div>
                                        <div className= "listadodeVentas cuadroTabla" > Personalizado </div>
                                        <div className= "listadodeVentas cuadroTabla"> cuaderno </div>
                                        <div className = "listadodeVentas cuadroTabla" >Disponible</div>
                                        <div className = "listadodeVentas cuadroTabla" >$45.000-$50.000</div>
                                        <div className = "cuadroTabla botonModulos letraEncabezado"><Link to = "/infoVentas" className ="link">Ver Información</Link></div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                        

                                    
                                        <div className = "listadodeVentas cuadroTabla">0002</div>
                                        <div className = "listadodeVentas cuadroTabla">Personalizado</div>
                                        <div className = "listadodeVentas cuadroTabla">llavero </div>
                                        <div className = "listadodeVentas cuadroTabla">Disponible</div>
                                        <div className = "listadodeVentas cuadroTabla">$10.000-$20.000</div>
                                        <div className = "cuadroTabla botonModulos letraEncabezado">Ver Información</div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                        

                                        
                                        <div className = "listadodeVentas cuadroTabla">0003</div>
                                        <div className = "listadodeVentas cuadroTabla">Personalizado</div>
                                        <div className = "listadodeVentas cuadroTabla ">mug</div>
                                        <div className = "listadodeVentas cuadroTabla">Disponible</div>
                                        <div className = "listadodeVentas cuadroTabla">$20.000-$40.000</div>
                                        <div className = "cuadroTabla botonModulos letraEncabezado">Ver Información</div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                    </li>
                                    <div className = "botonAgregarVenta2 botonModulos titulo centrar"> 
                                        
                                            <span><Link to = "/agregarVenta" className ="link">Agregar Venta</Link></span>
                                        
                                    </div>
                                </ul>
                            </section>
                        </main>
                        <Footer />

                </body>
            </PrivateRoute>
        </div>
    );
}
export default ListadoVentas;
