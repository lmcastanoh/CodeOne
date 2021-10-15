import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import React, { useEffect, useState } from "react";


const AgregarUsuario = () => {

    const [nombreUsuario, setNombreUsuario] =useState(''); 

    useEffect(() => {
        
    }, [])
    
    

    useEffect(() => {
        console.log('Hola soy un Use');
        
    }, []);

    const cambioNombre = (e) =>{
        setNombreUsuario('Nombre :',e.target.value);

    };

    const enviarDatosBackend = ()=>{
        console.log('Guardar Datos');

    }
    useEffect(() => {
        console.log('Esto es una funcion que se ejecuta cada que cambia el nombre')
    }, [nombreUsuario]);


    return(
        <div className="AgregarUsuario">
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
                                <span className="nombreUsuario">Cerrar Sesión</span>
                                <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
                            </div>
                        </li>
                    </ul>
                </header> 
                <main>
                    <h1 className = "tituloProductos">Agregar Usuario</h1>
                    <ul>
                        <form  className="tablaAgregarUsuarios" action="ejemplo.php" method="get" >
                            <p className = "letraEncabezado  " >Nombre: </p>
                            <p className="inputUsuario cuadroParaUsuarios"><input onChange={cambioNombre} type="text" name="nombre" size="40" /></p>

                            <p className = "letraEncabezado " >Correo Gmail: </p>
                            <p className="inputUsuario cuadroParaUsuarios"><input onChange={(e) => {console.log('Correo :',e.target.value)}} type="email" name="email" size="40" /></p>

                            <p className = "letraEncabezado  " >Número de Celular:</p>
                            <p className="inputUsuario cuadroParaUsuarios" ><input type="tel" name="celular" /></p>

                            <p className = "letraEncabezado  " >Fecha de Nacimiento:</p>
                            <p className="inputUsuario cuadroParaUsuarios " > <input type="date" name="fechanacimiento" /></p>
                    
                            <p className = "letraEncabezado  " >Fecha de Ingreso:</p>
                            <p className="inputUsuario cuadroParaUsuarios" > <input type="date" name="fechaingreso" /></p>

                            <p className = "letraEncabezado  " >Estado: </p>
                            <p className="inputUsuario cuadroParaUsuarios" ><select name="estado">
                                <option selected value="0"> Elige una opción </option>
                                <option value="1">Pendiente</option> 
                                <option value="2">Autorizado</option> 
                                <option value="2">No Autorizado</option></select>
                            </p>

                            <p className = "letraEncabezado ">Rol:</p>  
                            <p className="inputUsuario cuadroParaUsuarios">
                                <select name="Rol">
                                    <option selected value="0"> Elige una opción </option>
                                    <option value="1">Administrador</option> 
                                    <option value="2">Vendedor</option> 
                                </select>
                            </p>


                        </form>
                        <button type="button" oneClick={enviarDatosBackend} className = "botonAgregarUsuario botonModulos titulo centrar"><Link to='/comprobanteAgregar' className="link"> <span>Agregar Usuario</span></Link></button>
                    </ul>
                </main>
                <Footer />
            </body>
        </div>
    );
};
export default AgregarUsuario;

