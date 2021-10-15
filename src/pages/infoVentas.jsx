import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import iconoGranaje from "media/ruedaConfiguración.png";

function InfoVentas() {
    return(
        <div className="infoVentas">
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
                                <span className="nombreUsuario">Cerrar Sesión</span>
                                <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                            </div>
                        </li>
                    </ul>
                </header>
                <main>
                    <section>
                        <h1 className = "tituloVentas">001 Ventas <img className="boton icoTablaVentas" src={iconoGranaje} /></h1>
                        <ul>
                            <div className="tablaVentas">
                                <li className= "tablaVenta1"><div className = "cuadroTabla cuadroBlanco letraEncabezado">ID del Producto</div>
                                <div className = "cuadroValorTotal cuadroTabla">001</div>

                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">ID del Cliente</div>
                                <div className = "cuadroValorTotal cuadroTabla" >025</div>
                                
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado ">Vendedor</div>
                                <div className = "cuadroValorTotal cuadroTabla">Vanessa Quiroz</div></li>
                                
                                <li className= "tablaVenta1"><div className = "cuadroTabla cuadroBlanco letraEncabezado">Fecha de Venta</div>
                                    <div className = " cuadroValorTotal cuadroTabla">29/09/2021</div>
                                    <div className = "cuadroTabla cuadroBlanco  letraEncabezado">Nombre del Cliente</div>
                                    <div className = "cuadroValorTotal cuadroTabla" >Franca Gómez</div>
                                    <div className = "cuadroTabla cuadroBlanco letraEncabezado">Estado de la Venta </div>
                                    <div className = "cuadroValorTotal cuadroTabla">En proceso</div>
                                </li>

                        </div>
                        </ul>
                    </section>
                    <section>
                        <div className= "tablaNumeroProductos">
                            <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 1</div>
                            <div className = "cuadroTabla">Cuaderno</div>
                            <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                            <div className = "cuadroTabla">55.000</div>
                            <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                            <div className = "cuadroTabla" > 1 </div>
                            <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                            <div className = "cuadroTabla ">55.000</div>
                            
                            <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 2</div>
                            <div className = "cuadroTabla ">Cuaderno</div>
                            <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                            <div className = "cuadroTabla ">55.000</div>
                            <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                            <div className = "cuadroTabla " > 1 </div>
                            <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                            <div className = "cuadroTabla ">55.000</div></div>
                    </section>
                    <section className = "tablaValorTotal">
                        <div className = "tablaValorTotal cuadroValorTotal letraEncabezado">Valor total de la compra</div>
                        <div className = "cuadroTabla letraEncabezado">$110.000</div>
                    </section>
                </main>
                <Footer />
            </body>
        </div>
    );
}
export default InfoVentas;

