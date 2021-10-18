import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import React, {useState} from "react";
import Usuarios from "../services/usuario";
import http from "../http-common";
import { useLocation } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";

const EditarUsuario =(props) =>{
    const { logout } = useAuth0();
    const cerrarSesion =()=> {
        logout({returnTo: 'http://localhost:3000/listadoProductos'})
    localStorage.setItem('token', null)
    }

    const location = useLocation()
    console.log(location)

    let i_id_usuario=location.state.id_usuario;
    let i_nombre=location.state.nombre;
    let i_correo=location.state.correo;
    let i_celular=location.state.celular;
    let i_fecha_nacimiento=location.state.fecha_nacimiento;
    let i_fecha_ingreso=location.state.fecha_ingreso;
    let i_estado=location.state.estado;
    let i_rol=location.state.rol;
    
    let editing = false;
  
  /*  if (props.location.state ) {
        editing = true;*/
   /*const [viejaInfo, setViejaInfo] = useState({
        i_id_producto : props.location.state.id_producto,
        i_valor_unitario : props.location.state.valor_unitario,
        i_estado : props.location.state.estado,
        i_descripcion : props.location.state.descripcion
    });
      /*}*/
    
      const [nuevaInfo, setNuevaInfo] = useState({
        id_usuario: i_id_usuario,
        nombre: i_nombre,
        correo: i_correo,
        celular: i_celular,
        fecha_nacimiento: i_fecha_nacimiento,
        fecha_ingreso: i_fecha_ingreso,
        estado: i_estado,
        rol: i_rol
      });
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
          const {name, value} = event.target;
          setNuevaInfo(prevInput => {
              return {
                  ...prevInput,
                  [name]: value
              }
          })
          console.log(event.target);
    };
  
    const saveUsuario = () => {
      var data = {
        id_usuario: nuevaInfo.id_usuario,
        nombre: nuevaInfo.nombre,
        correo: nuevaInfo.correo,
        celular: nuevaInfo.celular,
        fecha_nacimiento: nuevaInfo.fecha_nacimiento,
        fecha_ingreso: nuevaInfo.fecha_ingreso,
        estado: nuevaInfo.estado,
        rol: nuevaInfo.rol        
      };
  
     
        Usuarios.updateUsuario(data)
          .then(response => {
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    
    };
    
    return(
        <div className="EditarUsuario">
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
                                    <input placeholder ="Buscar Usuarios"/>
                                    <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                                </div>
                            </li>
                            <li className ="boton tituloSeccionPagina"><Link to = '/listadoUsuarios' className="link">Administración de Usuario</Link></li>
                            <li>
                                <div className = "botonUsuario">
                                    <span onClick={() => cerrarSesion()} className="nombreUsuario">Cerrar Sesión</span>
                                    <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                                </div>
                            </li>
                        </ul>
                    </header> 
                    <main>
                        <h1 className = "tituloProductos">Agregar Usuario</h1>
                        <ul>
                            <form  className="tablaAgregarUsuarios" action="ejemplo.php" method="get" >

                            <p className = "letraEncabezado " >ID: </p>
                                <p className="inputUsuario cuadroParaUsuarios"><input type="text" onChange={handleInputChange} name="id_usuario" size="40" value={nuevaInfo.id_usuario} /></p>

                                <p className = "letraEncabezado " >Nombre: </p>
                                <p className="inputUsuario cuadroParaUsuarios"><input type="text" onChange={handleInputChange} name="nombre" size="40" value={nuevaInfo.nombre} /></p>

                                <p className = "letraEncabezado " >Correo Gmail: </p>
                                <p className="inputUsuario cuadroParaUsuarios"><input type="email" onChange={handleInputChange} name="correo" size="40" value={nuevaInfo.correo} /></p>

                                <p className = "letraEncabezado  " >Número de Celular:</p>
                                <p className="inputUsuario cuadroParaUsuarios" ><input type="tel" onChange={handleInputChange} name="celular" value={nuevaInfo.celular}/></p>

                                <p className = "letraEncabezado  " >Fecha de Nacimiento:</p>
                                <p className="inputUsuario cuadroParaUsuarios " > <input type="date" onChange={handleInputChange} name="fecha_nacimiento" value={nuevaInfo.fecha_nacimiento}/></p>
                        
                                <p className = "letraEncabezado  " >Fecha de Ingreso:</p>
                                <p className="inputUsuario cuadroParaUsuarios" > <input type="date" onChange={handleInputChange} name="fecha_ingreso" value={nuevaInfo.fecha_ingreso}/></p>

                                <p className = "letraEncabezado  " >Estado:</p>
                                <p className="inputUsuario cuadroParaUsuarios" > <input type="text" onChange={handleInputChange} name="estado" value={nuevaInfo.estado}/></p>

                                <p className = "letraEncabezado  " >Rol:</p>
                                <p className="inputUsuario cuadroParaUsuarios" > <input type="text" onChange={handleInputChange} name="rol" value={nuevaInfo.rol} /></p>


                            </form>
                            <div onClick={saveUsuario} className = "botonAgregarUsuario botonModulos titulo centrar"><Link to='/listadoUsuarios' className="link"> <span>Guardar Cambios</span></Link></div>
                        </ul>
                    </main>
                    <Footer />
                </body>
            </PrivateRoute>
        </div>
    );
}
export default EditarUsuario;

