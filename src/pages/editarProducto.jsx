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


function EditarProducto(props) {
    let initialProductoState = ""

    let editing = false
    const location = useLocation()
    console.log(location)

    const [input, setInput] =useState({
        id_producto: '',
        valor_unitario: 0.0,
        estado: '',
        descripcion: ''
        
    }) 

    if (props.location.state && props.location.state.currentProducto) {
        editing = true;
        initialProductoState = props.location.state.currentProducto.descripcion
      }

    const [producto, setProducto] = useState(initialProductoState);
    const [enviado, setEnviado] = useState(false);

  const handleInputChange = event => {
    setProducto(event.target.value);
  };

  const saveProducto = () => {
    var data = {
      id: props.producto.id_producto,
      descripcion: props.producto.descripcion,
      estado: props.producto.estado,
      valor_unitario: props.producto.valor_unitario
    };
};

    

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
        http.put("/productos", input);
        console.log(input);
    }


    
    return(
        
        <div className="editarProducto">

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
                                <span className="nombreUsuario">Cerrar Sesión</span>
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
                        <p className="inputProducto cuadroProductos" ><input onChange={handleChange} name="id_producto" defaultValue={location.state.id_producto} readOnly="readonly"/></p>

                        <p className = "letraEncabezado cuadroProductos" >Valor del Producto </p>
                        <p className="inputProducto cuadroProductos"><input onChange={handleChange} type="number" name="valor_unitario"  defaultValue={location.valor_unitario} /></p>

                        
                        <p className = "letraEncabezado cuadroProductos" >Estado </p>
                        <p className="inputProducto cuadroProductos"><input onChange={handleChange} type="text" name="estado" defaultValue={location.state.estado}/></p>

           
                        <p className = "letraEncabezado cuadroProductos" >Descripcion </p>
                        <p className="inputProducto cuadroProductos"><input onChange={handleChange} type="text" name="descripcion" defaultValue={location.state.descripcion}/></p>


                    </form>
                        <div  onClick={handleClic} className = "botonAgregarUsuario botonModulos titulo centrar"> <Link to='/listadoProductos' className ="link"><span>Guardar Cambios</span></Link></div>
                    </ul>
                </main>
                <Footer />
            </body>
        </div>

    );
}
export default  EditarProducto;
