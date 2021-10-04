/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import iconoUsuarioBlanco from "media/iconoUsuario2.png";
import iconoReciboVenta from "media/Reciboventa.png";

function agregarUsuario() {
    return(
        <div className="agregarUsuario">
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
                                <img className="boton logo" src="./media/logoNavbar.png" alt= "imagen" /> 
                            </div>
                        </li>
    
                        <li>
                            <div className="buscar">
                                <input placeholder ="Buscar Usuarios"/>
                                <img className="iconoBusqueda" src="./media/iconoBusqueda.ico" alt="search" />
                            </div>
                        </li>
                        <li className ="boton tituloSeccionPagina">Administración de Usuario</li>
                        <li>
                            <div className = "botonUsuario">
                                <span className="nombreUsuario">Ingresar/Registrar</span>
                                <img className ="iconoUsuario" src= "media/iconoUsuario.png" alt="iconoUsuario"/>
                            </div>
                        </li>
                    </ul>
                </header>  
                <main>
                    <h1 className = "tituloProductos">Agregar Usuario</h1>
                    <ul>
                        <form  className="tablaAgregarUsuarios" action="ejemplo.php" method="get" >
                            <p className = "letraEncabezado cuadroParaUsuarios" >Nombre: </p>
                            <p className="inputUsuario cuadroParaUsuarios"><input type="text" name="nombre" size="40" /></p>

                            <p className = "letraEncabezado cuadroParaUsuarios" >Correo Gmail: </p>
                            <p className="inputUsuario cuadroParaUsuarios"><input type="email" name="email" size="40" /></p>

                            <p className = "letraEncabezado cuadroParaUsuarios " >Número de Celular:</p>
                            <p className="inputUsuario cuadroParaUsuarios" ><input type="tel" name="celular" /></p>

                            <p className = "letraEncabezado cuadroParaUsuarios " >Fecha de Nacimiento:</p>
                            <p className="inputUsuario cuadroParaUsuarios " > <input type="date" name="fechanacimiento" /></p>
                    
                            <p className = "letraEncabezado cuadroParaUsuarios " >Fecha de Ingreso:</p>
                            <p className="inputUsuario cuadroParaUsuarios" > <input type="date" name="fechaingreso" /></p>

                            <p className = "letraEncabezado cuadroParaUsuarios " >Estado: </p>
                            <p className="inputUsuario cuadroParaUsuarios" ><select name="estado">
                                <option selected value="0"> Elige una opción </option>
                                <option value="1">Pendiente</option> 
                                <option value="2">Autorizado</option> 
                                <option value="2">No Autorizado</option></select>
                            </p>

                            <p className = "letraEncabezado cuadroParaUsuarios">Rol:</p>  
                            <p className="inputUsuario cuadroParaUsuarios">
                                <select name="Rol">
                                    <option selected value="0"> Elige una opción </option>
                                    <option value="1">Administrador</option> 
                                    <option value="2">Vendedor</option> 
                                </select>
                            </p>


                        </form>
                        <div className = "botonAgregarUsuario botonModulos titulo centrar"> <span>Agregar Usuario</span></div>
                    </ul>
                </main>
                <footer>
                    <img className ="logoCodeOne" src="./media/logoCodeOne.png" alt ="logoCodeOne"/>
                </footer>
            </body>
        </div>
    );
}
export default agregarUsuario;

