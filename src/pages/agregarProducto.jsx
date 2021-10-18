import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
import React, {useState} from "react";
import Productos from "../services/codeone";
import http from "../http-common";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from 'components/PrivateRoute';

const AgregarProducto =() =>{
    const { logout } = useAuth0();
    const cerrarSesion =()=> {
        logout({returnTo: 'http://localhost:3000/agregarProducto'})
    localStorage.setItem('token', null)
    }


    const [input, setInput] =useState({
        id_producto: 0,
        nombre_producto: '',
        valor_unitario: 0.0,
        estado: '',
        descripcion: ''
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
        http.post("/productos", input);
        console.log(input);
    }


    
    return(
        <div className="agregarproducto">
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
                            <Link className="link"to='/'>
                                <li>
                                    <div> 
                                        <img className="boton logo" src={logoPrana} alt= "imagen" /> 
                                    </div>
                                </li>
                            </Link>

                            <li>
                                <div className="buscar">
                                    <input placeholder ="Buscar Productos"/>
                                    <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                                </div>
                            </li>
                                <li className ="boton tituloSeccionPagina"><Link to='/listadoProductos' className ="link">Administración de Productos</Link></li>
                            <li>
                                <div className = "botonUsuario">
                                    <span onClick={() => cerrarSesion()} className="nombreUsuario">Cerrar Sesión</span>
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
                            <p className="inputProducto cuadroProductos" ><input onChange={handleChange} type="number" name="id_producto" autocomplete="off" value={input.id_producto} /></p>

                            <p className = "letraEncabezado cuadroProductos " >Nombre</p>
                            <p className="inputProducto cuadroProductos" ><input onChange={handleChange} type="text" name="nombre_producto" autocomplete="off" value={input.nombre_producto} /></p>

                            <p className = "letraEncabezado cuadroProductos" >Valor del Producto </p>
                            <p className="inputProducto cuadroProductos"><input onChange={handleChange} type="number" name="valor_unitario" autocomplete="off" value={input.valor_unitario} /></p>

                            
                            <p className = "letraEncabezado cuadroProductos" >Estado </p>
                            <p className="inputProducto cuadroProductos"><input onChange={handleChange} type="text" name="estado" autocomplete="off" value={input.estado}/></p>

            
                            <p className = "letraEncabezado cuadroProductos" >Descripcion </p>
                            <p className="inputProducto cuadroProductos"><input onChange={handleChange} type="text" name="descripcion" autocomplete="off" value={input.descripcion}/></p>


                        </form>
                            
                        </ul>
                        <ul><button  onClick={handleClic} className = "botonAgregar botonModulos titulo centrar"> <Link to='/comprobanteAgregar' className ="link"><span>Agregar Producto</span></Link></button></ul>
                    </main>
                    <Footer />
                </body>
            </PrivateRoute>
        </div>
    );
}
export default  AgregarProducto;