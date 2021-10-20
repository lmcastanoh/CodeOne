import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import React, {useState} from "react";
import Productos from "../services/codeone";
import http from "../http-common";
import HeaderP from 'components/HeaderP';
import PrivateRoute from 'components/PrivateRoute';

const AgregarProducto =() =>{


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
                    <HeaderP nombreBuscador='Buscar Producto' linkModulo= '/listadoProductos' nombreModulo = "Administración de Productos"/>
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