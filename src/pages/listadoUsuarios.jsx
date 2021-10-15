import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Se importa logo */
import logoPrana from "media/logoNavbar.png";
import logoCodeOne from "media/logoCodeOne.png";
/*Se importa iconos necesarios para la página*/
import iconoUsuarioVerde from "media/iconoUsuario.png";
import iconoBuscar from "media/iconoBusqueda.ico";
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";
import React, { useEffect, useState } from "react";


const ListadoUsuarios = ({listaUsuarios}) => {
    



    return(
        <div className="ListadodeUsuarios">
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
                                <Link to = "/" className ="link">
                                    <img className="boton logo" src={logoPrana} alt= "imagen" /> 
                                </Link>
                            </div>
                        </li>

                        <li>
                            <div className="buscar">
                                <input placeholder ="Buscar Usuarios"/>
                                <img className="iconoBusqueda" src={iconoBuscar} alt="search" />
                            </div>
                        </li>
                       
                        <li className ="boton tituloSeccionPagina"><Link to = "/listadoUsuarios" className ="link">Administración de Usuario </Link></li>
                        
                        <li>
                            <div className = "botonUsuario">
                                <span className="nombreUsuario">Cerrar Sesión</span>
                                <img className ="iconoUsuario" src= {iconoUsuarioVerde} alt="iconoUsuario"/>
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

                                {ListadoUsuarios.map((usuarios) => {
                                    return(
                                        <section>
                                            <div className = "cuadroTabla iconosConfBorrar" >
                                                <img className ="icotablaUsuarios boton " src= {iconoGranaje} alt="Editar"/>
                                                <img className ="icotablaUsuarios boton " src= {iconoBasurero} alt="Editar"/>
                                            </div>    
                                            <div className = "cuadroTabla "></div>
                                            <div className = "cuadroTabla" >Maria Gómez</div>
                                            <div className = "cuadroTabla">Vendedor</div>
                                            <div className = "cuadroTabla">Pendiente</div>
                                            <div className = "cuadroTabla botonModulos letraEncabezado"><Link to = "/infoUsuario" className ="link">Ver Información</Link></div>
                                        </section>

                                    );
                                })}                  

                                

                            </div>
        
                        </ul>            
        
                    </section>

                    <section>
                        <h3 className = "botonAgregarUsuario botonModulos centrar">
                            <span className = "letraBotonInfoProducto"><Link to = "/agregarUsuario" className ="link">Agregar Usuario</Link></span>
                        </h3>
                    </section>
                </main>
            
                <Footer />
            </body>

        </div>
    );
}
export default ListadoUsuarios;
   
 