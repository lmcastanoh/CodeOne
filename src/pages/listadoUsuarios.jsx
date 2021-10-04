/*Se importa logo */
import logoPrana from "./media/logoNavbar.png";
import logoCodeOne from "./media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "./media/iconoUsuario.png";
import iconoBuscar from "./media/iconoBusqueda.ico";
import iconoUsuarioBlanco from "./media/iconoUsuario2.png";
import iconoReciboVenta from "./media/Reciboventa.png";


function ListadoUsuarios(){
    return(
        <div className="Listado de Usuarios">
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
                            <img className="boton logo" src="./media/logoNavbar.png" alt= "imagen" /> 
                        </div>
                    </li>
    
                <li>
                    <div className="buscar">
                        <input placeholder ="Buscar Usuarios"/>
                        <img className="iconoBusqueda" src="./media/iconoBusqueda.ico" alt="search" />
                    </div>
                    </li>
                <li className ="boton tituloSeccionPagina">Gestión de usuarios</li>
                <li>
                    <div className = "botonUsuario">
                        <span className="nombreUsuario">Ingresar/Registrar</span>
                        <img className ="iconoUsuario" src= "media/iconoUsuario.png" alt="iconoUsuario"/>
                    </div>
                    
                </li>
            </ul>
            </header>
            
            <main>
                <section>
                    <h1 className = "tituloProductos">Usuarios</h1>    
                    <ul>
                        <div className= "tablaUsuarios">

                            <div className = "letraEncabezado" > </div>      
                            <div className = "letraEncabezado">ID</div>
                            <div className = "letraEncabezado">Nombre</div>
                            <div className = "letraEncabezado">Rol</div>
                            <div className = "letraEncabezado">Estado</div>
                            <div className = "letraEncabezado" > </div>                     

                            <div className = "cuadroTabla iconosConfBorrar" >
                                <img className ="icoTabla" src= "./media/ruedaConfiguración.png" alt="Editar"/>
                                <img className ="icoTabla" src= "./media/basurero.png" alt="Editar"/>
                            </div>    
                            <div className = "cuadroTabla ">123</div>
                            <div className = "cuadroTabla" >Maria Gómez</div>
                            <div className = "cuadroTabla">Vendedor</div>
                            <div className = "cuadroTabla">Pendiente</div>
                            <div className = "cuadroTabla botonModulos letraEncabezado" >Ver Información</div>

                            <div className = "cuadroTabla iconosConfBorrar" >
                                <img className ="icoTabla" src= "./media/ruedaConfiguración.png" alt="Editar"/>
                                <img className ="icoTabla" src= "./media/basurero.png" alt="Editar"/>
                            </div>  
                            <div className = "cuadroTabla ">...</div>
                            <div className = "cuadroTabla"></div>
                            <div className = "cuadroTabla"></div>
                            <div className = "cuadroTabla"></div>
                            <div className = "cuadroTabla botonModulos letraEncabezado" >Ver Información</div>

                            <div className = "cuadroTabla iconosConfBorrar" >
                                <img className ="icoTabla" src= "./media/ruedaConfiguración.png" alt="Editar"/>
                                <img className ="icoTabla" src= "./media/basurero.png" alt="Editar"/>
                            </div>  
                            <div className = "cuadroTabla"></div>
                            <div className = "cuadroTabla"></div>
                            <div className = "cuadroTabla"></div>
                            <div className = "cuadroTabla"></div>
                            <div className = "cuadroTabla botonModulos letraEncabezado" >Ver Información</div>

                        </div>
    
                    </ul>            
    
                </section>

                <section>
                    <h3 className = "botonAgregarUsuario botonModulos centrar">
                        <span className = "letraBotonInfoProducto">Agregar Usuario</span>
                    </h3>
                </section>
            </main>
           
            <footer>
                <img className ="logoCodeOne" src="./media/logoCodeOne.png" alt ="logoCodeOne"/>
            </footer>

        </div>
    );
}
export default ListadoUsuarios;
   
 