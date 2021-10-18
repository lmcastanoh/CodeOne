import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';

const AgregarVenta = () => {

    return(
        <div classname="agregarVentas"> 
            <PrivateRoute>
                <body>
                    <HeaderP nombreBuscador='Buscar Venta' linkModulo= '/listadoVentas' nombreModulo = "Administración de Ventas"/>    
                    <main>
                        <section>
                            <h1 className = "tituloVentas">030 Venta</h1>
                            
                            <ul>
                                <div className="tablaVentasProducto">
                                    <li className= "tablaVenta2">
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">ID del Producto</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" > <input type="number" name="IDproducto"/></div>
                                        
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">ID del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="number" name="ID del Cliente"/></div>

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado ">Vendedor</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><select name="estado">
                                        <option selected value="0"> Elige una opción </option>
                                        <option value="1">Estefania Cano</option> 
                                        <option value="2">Vanessa Quiroz</option> 
                                        </select></div>
                                    </li>

                                    
                                    <li className = "tablaVenta2">

                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Fecha de Venta</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><input type="date" name="fechaingreso"/></div>
                                        <div className = "cuadroTabla cuadroBlanco  letraEncabezado">Nombre del Cliente</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="text" name="Nombre Cliente"/></div>
                                        <div className = "cuadroTabla cuadroBlanco letraEncabezado">Estado de la Venta</div>
                                        <div className = "cuadroValorTotal cuadroTabla infoAgregarVenta inputAgregarventa"><select name="estado">
                                            <option selected value="0"> Elige una opción </option>
                                            <option value="1">En proceso</option> 
                                            <option value="2">Cancelada</option> 
                                            <option value="2">En tregada </option> 
                                            </select>
                                        </div>
                                    </li>

                                </div>
                            </ul>
                        </section>
                        <div className = "botonAgregarProducto botonModulos titulo centrar"><span>Agregar Productos</span></div>

                        <section>
                            <div className= "tablaNumeroProductos">
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 1</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa"><select name="estado">
                                    <option selected value="0"> Elige una opción </option>
                                    <option value="1">Cuaderno</option> 
                                    <option value="2">llavero</option> 
                                    <option value="2">Base celular </option> 
                                    <option value="2">Agenda</option> 
                                    <option value="2">Planeador</option> 
                                    <option value="2">Mug</option> 
                                    <option value="2">Calendario</option> 
                                    <option value="2">Lapicero</option> 
                                </select></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                <div className = "cuadroTabla">--</div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa inputAgregarventa" ><input type="number" name="Cantidad"/></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                                <div className = "cuadroTabla ">--</div>
                                
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Producto 2</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa inputAgregarventa"><select name="estado">
                                    <option selected value="0"> Elige una opción </option>
                                    <option value="1">Cuaderno</option> 
                                    <option value="2">llavero</option> 
                                    <option value="2">Base celular </option> 
                                    <option value="2">Agenda</option> 
                                    <option value="2">Planeador</option> 
                                    <option value="2">Mug</option> 
                                    <option value="2">Calendario</option> 
                                    <option value="2">Lapicero</option> 
                                </select></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Unitario</div>
                                <div className = "cuadroTabla">--</div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Cantidad</div>
                                <div className = "cuadroTabla infoAgregarVenta inputAgregarventa" ><input type="number" name="Cantidad"/></div>
                                <div className = "cuadroTabla cuadroBlanco letraEncabezado">Valor Total</div>
                                <div className = "cuadroTabla ">--</div>
                            </div>
                        </section>
                        
                        <section className = "tablaValorTotal">
                            <div className = "tablaValorTotal cuadroValorTotal letraEncabezado">Valor total de la compra</div>
                            <div className = "cuadroTabla letraEncabezado">--</div>
                        </section>
                        <section>
                            <div className = "botonAgregarVenta botonModulos titulo centrar"><Link to='/comprobanteAgregar' className="link"><span>Agregar Venta</span></Link></div>
                        </section>
                    </main>
                    <Footer />
                </body>
            </PrivateRoute>

        </div>
    );
}
export default AgregarVenta;
