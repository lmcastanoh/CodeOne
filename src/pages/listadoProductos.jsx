/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";

function ListadoProductos() {
    return(
        <div classname="listadoProductos">
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
                                <input placeholder ="Buscar Productos"/>
                                <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                            </div>
                        </li>
                        <li className ="boton tituloSeccionPagina">Administración de Productos</li>
                        <li>
                            <div className = "botonUsuario">
                                <span className="nombreUsuario">Ingresar/Registrar</span>
                                <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                            </div>
                        </li>
                    </ul>
                </header>  
                <main>
                    <section>
                        <h1 className = "tituloProductos">Cuadernos</h1>
            
                        <div className = "botonAgregar botonModulos titulo centrar"> <span>Agregar Productos</span></div>
            
                        <ul>
                            <div className= "tablaCuadernos">
            
                                <div className = "cuadroTabla letraEncabezado">ID</div>
                                <div className = "cuadroTabla letraEncabezado">Nombre</div>
                                <div className = "cuadroTabla letraEncabezado">Descrpción</div>
                                <div className = "cuadroTabla letraEncabezado">valor</div>
                                <div className = "cuadroTabla letraEncabezado">Estado</div>
                                <div className = "cuadroTabla letraEncabezado " >Ver Información</div>
                                <div className = "cuadroTabla letraEncabezado">Editar</div>
                                <div className = "cuadroTabla letraEncabezado">Eliminar</div>
                                    
                                <div className = "cuadroTabla ">0001</div>
                                <div className = "cuadroTabla" >Tamaño Carta</div>
                                <div className = "cuadroTabla">Personalizado</div>
                                <div className = "cuadroTabla" >$45.000-$60.000</div>
                                <div className = "cuadroTabla" >Disponible</div>
                                <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                    
                
                                <div className = "cuadroTabla ">0002</div>
                                <div className = "cuadroTabla">Tamaño Media Carta</div>
                                <div className = "cuadroTabla">Personalizado </div>
                                <div className = "cuadroTabla">$35.000-$45.000</div>
                                <div className = "cuadroTabla">Disponible</div>
                                <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                
                                    
                
                                <div className = "cuadroTabla">0003</div>
                                <div className = "cuadroTabla">Libreta Telefónica</div>
                                <div className = "cuadroTabla">Personalizado </div>
                                <div className = "cuadroTabla">$18.000-$20.000</div>
                                <div className = "cuadroTabla">Disponible</div>
                                <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                    
            
                            </div>
            
                        </ul>
            
                    </section>
                    <section>
            
                        <h1 className ="tituloProductos ">Accesorios</h1>
                        <div className = "botonAgregar botonModulos titulo centrar"> <span>Agregar Productos</span></div>
                        <ul>
                            <div className= "tablaAccesorios">
            
                                <div className = "cuadroTabla letraEncabezado">ID</div>
                                <div className = "cuadroTabla letraEncabezado">Nombre</div>
                                <div className = "cuadroTabla letraEncabezado">Descrpción</div>
                                <div className = "cuadroTabla letraEncabezado">valor</div>
                                <div className = "cuadroTabla letraEncabezado">Estado</div>
                                <div className = "cuadroTabla letraEncabezado" >Ver Información</div>
                                <div className = "cuadroTabla letraEncabezado">Editar</div>
                                <div className = "cuadroTabla letraEncabezado">Eliminar</div>
                                    
                                    
                                <div className = "cuadroTabla ">0004</div>
                                <div className = "cuadroTabla" >Llavero</div>
                                <div className = "cuadroTabla">Personalizado</div>
                                <div className = "cuadroTabla" >$8.000</div>
                                <div className = "cuadroTabla" >Disponible</div>
                                <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                
                                <div className = "cuadroTabla">0005</div>
                                <div className = "cuadroTabla">Base Celulares</div>
                                <div className = "cuadroTabla">Personalizado </div>
                                <div className = "cuadroTabla">$20.000</div>
                                <div className = "cuadroTabla">Disponible</div>
                                <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                    
            
                                <div className = "cuadroTabla">0006</div>
                                <div className = "cuadroTabla">Separadores Libros</div>
                                <div className = "cuadroTabla">Personalizado</div>
                                <div className = "cuadroTabla">$8.000</div>
                                <div className = "cuadroTabla">Disponible</div>
                                <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
            
                                <div className = "cuadroTabla">0007</div>
                                <div className = "cuadroTabla">Portaretratos</div>
                                <div className = "cuadroTabla">Personalizado </div>
                                <div className = "cuadroTabla">$20.000</div>
                                <div className = "cuadroTabla">Disponible</div>
                                <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
            
                                <div className = "cuadroTabla">0008</div>
                                <div className = "cuadroTabla">Mugs</div>
                                <div className = "cuadroTabla">Personalizado </div>
                                <div className = "cuadroTabla">$18.000</div>
                                <div className = "cuadroTabla">Disponible</div>
                                <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                    
                                <div className = "cuadroTabla">0009</div>
                                <div className = "cuadroTabla">Lapiceros</div>
                                <div className = "cuadroTabla">Personalizado </div>
                                <div className = "cuadroTabla">$10.000</div>
                                <div className = "cuadroTabla">Disponible</div>
                                <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
            
                            </div>
                        </ul>
                    </section>
            
                    <section>
                            
                        <h1 className ="tituloProductos">Organizadores</h1>
            
                        <div className = "botonAgregar botonModulos titulo centrar"> <span>Agregar Productos</span></div>
                        <ul>
            
                                <div className= "tablaOrganizadores">
            
                                    <div className = "cuadroTabla letraEncabezado">ID</div>
                                    <div className = "cuadroTabla letraEncabezado">Nombre</div>
                                    <div className = "cuadroTabla letraEncabezado">Descrpción</div>
                                    <div className = "cuadroTabla letraEncabezado">valor</div>
                                    <div className = "cuadroTabla letraEncabezado">Estado</div>
                                    <div className = "cuadroTabla letraEncabezado" >Ver Información</div>
                                    <div className = "cuadroTabla letraEncabezado">Editar</div>
                                    <div className = "cuadroTabla letraEncabezado">Eliminar</div>
                
                                    <div className = "cuadroTabla">0009</div>
                                    <div className = "cuadroTabla" >Agenda</div>
                                    <div className = "cuadroTabla">Personalizado</div>
                                    <div className = "cuadroTabla" >$60.000</div>
                                    <div className = "cuadroTabla" >Disponible</div>
                                    <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                    <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                    <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                
                                    <div className = "cuadroTabla">0010</div>
                                    <div className = "cuadroTabla">Planeador</div>
                                    <div className = "cuadroTabla">Personalizado </div>
                                    <div className = "cuadroTabla">$35.000</div>
                                    <div className = "cuadroTabla">Disponible</div>
                                    <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                    <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                    <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                
                                    <div className = "cuadroTabla">0006</div>
                                    <div className = "cuadroTabla">Calendario</div>
                                    <div className = "cuadroTabla">Personalizado </div>
                                    <div className = "cuadroTabla">$35.000</div>
                                    <div className = "cuadroTabla">Disponible</div>
                                    <div className = "cuadroTabla botonModulos" >Ver Información</div>
                                    <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                    <div className = "cuadroTabla botonModulos"><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
            
                                </div>
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
export default ListadoProductos;

      
          
        
