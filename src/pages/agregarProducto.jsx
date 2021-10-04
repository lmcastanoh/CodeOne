/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
function AgregarProducto() {
    return(
        <div className="agregarproducto">
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
                    <h1 className = "tituloProductos">Agregar Productos</h1>
                    <ul>
                    <form  className="tablaAgregarProductos" action="ejemplo.php" method="get" >
                        
                        <p className = "letraEncabezado cuadroProductos " >ID</p>
                        <p className="inputProducto cuadroProductos" ><input type="number" name="ID" /></p>

                        <p className = "letraEncabezado cuadroProductos" >Valor del Producto </p>
                        <p className="inputProducto cuadroProductos"><input type="number" name="precio" /></p>

                        <p className = "letraEncabezado cuadroProductos " >Estado </p>
                        <p className="inputProducto cuadroProductos" ><select name="estado">
                            <option selected value="0"> Elige una opción </option>
                            <option value="1">Disponible</option> 
                            <option value="2">No Disponible</option> </select></p>

           
                        <p className = "letraEncabezado cuadroProductos" >Descripcion </p>
                        <p className="inputProducto cuadroProductos"><input type="text" name="Descripcion" /></p>

                        <p className = "letraEncabezado cuadroProductos" >Cargar Imagen</p>
                        <p className="inputProducto cuadroProductos"><input type="image" name="imagen" /></p>


                    </form>
                    <div className = "botonAgregarUsuario botonModulos titulo centrar"> <span>Agregar Producto</span></div>
                    </ul>
                </main>

                <footer>
                    <img className ="logoCodeOne" src={logoCodeOne} alt ="logoCodeOne"/>
                </footer>
            </body>
        </div>
    );
}
export default  AgregarProducto;
    
