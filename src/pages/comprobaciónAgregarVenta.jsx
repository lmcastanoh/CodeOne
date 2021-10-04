/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import iconoUsuarioBlanco from "media/iconoUsuario2.png";
import iconoReciboVenta from "media/Reciboventa.png";

function comprobaciónAgregarVenta() {

    return(
        <div className="comprobaciónAgregarVenta">
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
                                <input placeholder ="Buscar venta"/>
                                <img className="iconoBusqueda" src="./media/iconoBusqueda.ico" alt="search" />
                            </div>
                            </li>
                        <li className ="boton tituloSeccionPagina">Administración de Ventas</li>
                        <li>
                            <div className = "botonUsuario">
                                <span className="nombreUsuario">Ingresar/Registrar</span>
                                <img className ="iconoUsuario" src= "media/iconoUsuario.png" alt="iconoUsuario"/>
                            </div>
                            
                        </li>
                    </ul>
                </header>  

                <main className = "tamañoPaginaIndex">
                    <section>
                        <ul className="comprovante">
                            <span>¡La venta ha sido agregada correctamente!</span>

                        </ul>
                    </section>
                </main>
                <footer>
                    <img className ="logoCodeOne" src="./media/logoCodeOne.png" alt ="logoCodeOne"/>  
                </footer>

            </body>

        </div>
    );
}
export default comprobaciónAgregarVenta;


