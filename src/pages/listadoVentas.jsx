
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";

function ListadoVentas() {
    return(
        <div className="listadoVentas">
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
                                <img className="boton logo" src={logoPrana} alt= "imagen" /> 
                            </div>
                        </li>

                        <li>
                            <div className="buscar">
                                <input placeholder ="Buscar ventas"/>
                                <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                            </div>
                        </li>
                        <li className ="boton tituloSeccionPagina">Administración de Ventas</li>
                        <li>
                            <div className = "botonUsuario">
                                <span className="nombreUsuario">Ingresar/Registrar</span>
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
                                    <div className = "listadodeVentas letraEncabezado">Editar</div>
                                    <div className = "listadodeVentas letraEncabezado">Eliminar</div>

                                    <div className = "listadodeVentas ">0001</div>
                                    <div className= "listadodeVentas" > Personalizado </div>
                                    <div className= "listadodeVentas"> cuaderno </div>
                                    <div className = "listadodeVentas" >Disponible</div>
                                    <div className = "listadodeVentas " >$45.000-$50.000</div>
                                    <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                    <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                
                                    <div className = "listadodeVentas ">0002</div>
                                    <div className = "listadodeVentas">Personalizado</div>
                                    <div className = "listadodeVentas">llavero </div>
                                    <div className = "listadodeVentas">Disponible</div>
                                    <div className = "listadodeVentas">$10.000-$20.000</div>
                                    <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                    <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                    
                                    <div className = "listadodeVentas">0003</div>
                                    <div className = "listadodeVentas">Personalizado</div>
                                    <div className = "listadodeVentas">mug</div>
                                    <div className = "listadodeVentas">Disponible</div>
                                    <div className = "listadodeVentas">$20.000-$40.000</div>
                                    <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                    <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                </li>
                                <div className = "botonAgregarVenta2 botonModulos titulo centrar"> <span>Agregar Venta</span></div>
                            </ul>
                        </section>
                    </main>
                    <footer>
                        <img className ="logoCodeOne" src={logoCodeOne} alt ="logoCodeOne"/>
                    </footer>

            </body>
        </div>
    );
}
export default ListadoVentas;
