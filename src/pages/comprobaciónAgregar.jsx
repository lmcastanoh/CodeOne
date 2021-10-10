/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";

function ComprobaciónAgregar() {

    return(
        <div className="comprobaciónAgregar">
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
                                <input placeholder ="Buscar"/>
                                <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                            </div>
                        </li>
                        <li className ="boton tituloSeccionPagina">Home</li>
                        <li>
                            <div className = "botonUsuario">
                                <span className="nombreUsuario">Ingresar/Registrar</span>
                                <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                            </div>
                        </li>
                    </ul>
                </header>

                <main className = "tamañoPaginaIndex">
                    <section>
                        <ul className="comprovante">
                            <span>¡La información ha sido agregada correctamente!</span>
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
export default ComprobaciónAgregar;


