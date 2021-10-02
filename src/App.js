import './styles/estilos.css';
import logoPrana from "./media/logoNavbar.png";

function App() {
  return (
    <div className="App">
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
        <main className = "tamañoPaginaIndex">
            <section>
                <ul className ="botonModulos">
                    <li><h1 className = "titulo">Productos</h1></li>
                    <li>
                        <div className = "carruselProductos">
                            <img className = "contenedorImagen" src= "./media/carruselProductos/album.jpg" alt="Foto Mug" />
                            <img className = "contenedorImagen" src= "./media/carruselProductos/lapiceros.png" alt="Foto Mug" />
                            <img className = "contenedorImagen" src= "./media/carruselProductos/cuadernoPsico.jpg" alt="Foto Cuaderno" /> 
                            <img className = "contenedorImagen" src= "./media/carruselProductos/llavero.jpg" alt="Foto Llavero" />
                            <img className = "contenedorImagen" src= "./media/carruselProductos/mugAbogada.jpg" alt="Foto Mug" />
                            <img className = "contenedorImagen" src= "./media/carruselProductos/cuadernoMorado.png" alt="Foto Mug" />
                            <img className = "contenedorImagen" src= "./media/carruselProductos/planeador.jpg" alt="Foto Mug" />
                            <img className = "contenedorImagen" src= "./media/carruselProductos/basecelular.jpg" alt="Foto Mug" />
                        </div>
                    </li>
                </ul>
            </section>
            <div className ="centrar">
                <section>
                    <ul  className = "botonModulos">
                        <li>
                            <h1 className = "titulo centrar">
                                <img className ="reciboVenta" src="media/Reciboventa.png" alt="IconoVenta" Ventas />
                                <span>Ventas</span>
                            </h1>
                            
                        </li>
                        
                    </ul>
                </section>
                <section>
                    <ul  className = "botonModulos">
                        <li>
                            <h1 className = "titulo centrar">
                                <img className ="reciboVenta" src="./media/iconoUsuario2.png" alt="IconoVenta" Ventas />
                                <span>Usuarios</span>
                            </h1>
                        </li>
                    </ul>
                </section>
            </div>



        </main>
        <footer>
            <img className ="logoCodeOne" src="./media/logoCodeOne.png" alt ="logoCodeOne"/>
            
        </footer>
      </body>
    </div>
  );
}

export default App;
