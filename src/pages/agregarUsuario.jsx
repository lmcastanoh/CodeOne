import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import React, {useState} from "react";
import {useEffect} from "react";
import Usuarios from "../services/usuario";
import http from "../http-common";
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";


const AgregarUsuario = () => {
    const { logout } = useAuth0();
    
    const [input, setInput] =useState({
        id_usuario: 0,
        nombre: "",
        correo: "",
        celular: "",
        fecha_nacimiento: "",
        fecha_ingreso: "",
        estado:"",
        rol: ""
    }) 

    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
        console.log(event.target);
    }

    function handleClic(event){
        event.preventDefault();
        http.post("/usuarios", input);
        console.log(input);
    }

    return(
            <div className="AgregarUsuario">
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
                                    <span onClick={() => logout({ returnTo: window.location.origin })} className="nombreUsuario">Cerrar Sesión</span>
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
                                <p className="inputUsuario cuadroParaUsuarios"><input type="text" onChange={handleChange} name="id_usuario" size="40" value={input.id_usuario} /></p>

                                <p className = "letraEncabezado " >Nombre: </p>
                                <p className="inputUsuario cuadroParaUsuarios"><input type="text" onChange={handleChange} name="nombre" size="40" value={input.nombre} /></p>

                                <p className = "letraEncabezado " >Correo Gmail: </p>
                                <p className="inputUsuario cuadroParaUsuarios"><input type="email" onChange={handleChange} name="correo" size="40" value={input.correo} /></p>

                                <p className = "letraEncabezado  " >Número de Celular:</p>
                                <p className="inputUsuario cuadroParaUsuarios" ><input type="tel" onChange={handleChange} name="celular" value={input.celular}/></p>

                                <p className = "letraEncabezado  " >Fecha de Nacimiento:</p>
                                <p className="inputUsuario cuadroParaUsuarios " > <input type="date" onChange={handleChange} name="fecha_nacimiento" value={input.fecha_nacimiento}/></p>
                        
                                <p className = "letraEncabezado  " >Fecha de Ingreso:</p>
                                <p className="inputUsuario cuadroParaUsuarios" > <input type="date" onChange={handleChange} name="fecha_ingreso" value={input.fecha_ingreso}/></p>

                                <p className = "letraEncabezado  " >Estado:</p>
                                <p className="inputUsuario cuadroParaUsuarios" > <input type="text" onChange={handleChange} name="estado" value={input.estado}/></p>

                                <p className = "letraEncabezado  " >Rol:</p>
                                <p className="inputUsuario cuadroParaUsuarios" > <input type="text" onChange={handleChange} name="rol" value={input.rol} /></p>

                            </form>
                        </ul>
                        <ul>
                        <div onClick={handleClic} className = "botonAgregarUsuario botonModulos titulo centrar"><Link to='/comprobanteAgregar' className="link"> <span>Agregar Usuario</span></Link></div>
                        </ul>
                    </main>
                    <Footer />
                </body>
                </PrivateRoute>
            </div>
        
    );
    
};
export default AgregarUsuario;