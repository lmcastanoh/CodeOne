import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";

const AgregarVenta = () => {
    const { logout } = useAuth0();
    return(
        <div classname="agregarVentas"> 
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
                            <Link to='/'>
                                <li>
                                    <div> 
                                        <img className="boton logo" src={logoPrana} alt= "imagen" /> 
                                    </div>
                                </li>
                            </Link>
                            <li>
                                <div className="buscar">
                                    <input placeholder ="Buscar Ventas"/>
                                    <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                                </div>
                            </li>
                            <li className ="boton tituloSeccionPagina"><Link to='/listadoVentas' className="link">Administración de Ventas</Link></li>
                            <li>
                                <div className = "botonUsuario">
                                    <span onClick={() => logout({ returnTo: window.location.origin })} className="nombreUsuario">/Cerrar Sesión</span>
                                    <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                                </div>
                            </li>
                        </ul>
                    </header>    
                    <main>
                        <section>
                            <h1 className = "tituloVentas">030 Venta</h1>
                            
                            <ul>
                                <div className="tablaVentasProducto">
                                    <li className= "tablaVenta2">
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">ID del Producto</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" > <input type="number" name="IDproducto"/></div>
                                        
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">ID del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="number" name="ID del Cliente"/></div>

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado ">Vendedor</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><select name="estado">
                                        <option selected value="0"> Elige una opción </option>
                                        <option value="1">Estefania Cano</option> 
                                        <option value="2">Vanessa Quiroz</option> 
                                        </select></div>
                                    </li>

                                    
                                    <li className = "tablaVenta2">

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Fecha de Venta</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><input type="date" name="fechaingreso"/></div>
                                        <div className = "cuadroTabla cuadroBlanco  letraEncabezado">Nombre del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="text" name="Nombre Cliente"/></div>
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Estado de la Venta</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><select name="estado">
                                            <option selected value="0"> Elige una opción </option>
                                            <option value="1">En proceso</option> 
                                            <option value="2">Cancelada</option> 
                                            <option value="2">En tregada </option> 
                                            </select>
                                        </div>
                                    </li>

                                </div>
                            </ul>
                        </section>
                        <div className = "botonAgregarProducto botonModulos titulo centrar"><span>Agregar Productos</span></div>

                        <section>
                            <div className= "tablaNumeroProductos">
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 1</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><select name="estado">
                                    <option selected value="0"> Elige una opción </option>
                                    <option value="1">Cuaderno</option> 
                                    <option value="2">llavero</option> 
                                    <option value="2">Base celular </option> 
                                    <option value="2">Agenda</option> 
                                    <option value="2">Planeador</option> 
                                    <option value="2">Mug</option> 
                                    <option value="2">Calendario</option> 
                                    <option value="2">Lapicero</option> 
                                </select></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                <div className = "cuadroTabla">--</div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa inputAgregarventa" ><input type="number" name="Cantidad"/></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                                <div className = "cuadroTabla ">--</div>
                                
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 2</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa inputAgregarventa"><select name="estado">
                                    <option selected value="0"> Elige una opción </option>
                                    <option value="1">Cuaderno</option> 
                                    <option value="2">llavero</option> 
                                    <option value="2">Base celular </option> 
                                    <option value="2">Agenda</option> 
                                    <option value="2">Planeador</option> 
                                    <option value="2">Mug</option> 
                                    <option value="2">Calendario</option> 
                                    <option value="2">Lapicero</option> 
                                </select></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                <div className = "cuadroTabla">--</div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="number" name="Cantidad"/></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                                <div className = "cuadroTabla ">--</div>
                            </div>
                        </section>
                        
                        <section className = "tablaValorTotal">
                            <div className = "tablaValorTotal cuadroValorTotal letraEncabezado">Valor total de la compra</div>
                            <div className = "cuadroTabla letraEncabezado">--</div>
                        </section>
                        <section>
                            <div className = "botonAgregarVenta botonModulos titulo centrar"><Link to='/comprobanteAgregar' className="link"><span>Agregar Venta</span></Link></div>
                        </section>
                    </main>
                    <Footer />
                </body>
            </PrivateRoute>

        </div>
    );
}
export default AgregarVenta;
