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
import { useLocation } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import { useAuth0 } from "@auth0/auth0-react";

const EditarProducto=(props) => {
    const { logout } = useAuth0();
    const cerrarSesion =()=> {
        logout({returnTo: 'http://localhost:3000/listadoProductos'})
    localStorage.setItem('token', null)
    }

    const location = useLocation()
    console.log(location)

    let i_id_producto = location.state.id_producto;
    let i_nombre_producto = location.state.nombre_producto;
    let i_valor_unitario = location.state.valor_unitario;
    let i_estado = location.state.estado;
    let i_descripcion = location.state.descripcion;
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
        id_producto: i_id_producto,
        nombre_producto: i_nombre_producto,
        valor_unitario: i_valor_unitario,
        estado: i_estado,
        descripcion: i_descripcion
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
  
    const saveProducto = () => {
      var data = {
          id_producto: nuevaInfo.id_producto,
          nombre_producto: nuevaInfo.nombre_producto,
          descripcion: nuevaInfo.descripcion,
          valor_unitario: nuevaInfo.valor_unitario, 
          estado: nuevaInfo.estado
      };
  
     
        Productos.updateProducto(data)
          .then(response => {
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    
    };
    
    return(
        
        <div className="editarProducto">
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
                        <h1 className = "tituloProductos">Editar Productos</h1>
                        <ul>
                        <form  className="tablaAgregarProductos" action="ejemplo.php" method="get" >
                            
                            <p className = "letraEncabezado cuadroProductos " >ID</p>
                            <p className="inputProducto cuadroProductos" ><input onChange={handleInputChange} name="id_producto" value={nuevaInfo.id_producto} readOnly="readonly"/></p>

                            <p className = "letraEncabezado cuadroProductos" >Nombre </p>
                            <p className="inputProducto cuadroProductos"><input onChange={handleInputChange} type="text" name="nombre_producto" value={nuevaInfo.nombre_producto}/></p>

                            <p className = "letraEncabezado cuadroProductos" >Valor del Producto </p>
                            <p className="inputProducto cuadroProductos"><input onChange={handleInputChange} type="number" name="valor_unitario"  value={nuevaInfo.valor_unitario} /></p>

                            
                            <p className = "letraEncabezado cuadroProductos" >Estado </p>
                            <p className="inputProducto cuadroProductos"><input onChange={handleInputChange} type="text" name="estado" value={nuevaInfo.estado}/></p>

            
                            <p className = "letraEncabezado cuadroProductos" >Descripcion </p>
                            <p className="inputProducto cuadroProductos"><input onChange={handleInputChange} type="text" name="descripcion" value={nuevaInfo.descripcion}/></p>


                        </form>
                            <div  onClick={saveProducto} className = "botonAgregarUsuario botonModulos titulo centrar"> <Link to='/listadoProductos' className ="link"><span>Guardar Cambios</span></Link></div>
                        </ul>
                    </main>
                    <Footer />
                </body>
            </PrivateRoute>
        </div>

    );
}
export default  EditarProducto;