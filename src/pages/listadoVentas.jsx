import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
/*Iconos de editar o eliminar*/
import iconoGranaje from "media/ruedaConfiguración.png";
import iconoBasurero from "media/basurero.png";
import PrivateRoute from 'components/PrivateRoute';
import HeaderP from 'components/HeaderP';

const ListadoVentas=() =>{
    


    return(
        <div className="listadoVentas">
            <PrivateRoute>
                <body>
                    <HeaderP linkModulo= '/listadoVentas' nombreModulo = "Administración de Ventas"/>
                        <main className= "tamañoPaginaIndex">
                            <section>
                                <h1 className = "tituloProductos">Listado de Ventas</h1>
                                <ul>
                                    <li className= "tablaListaVentas">
                                        <div className = "listadodeVentas letraEncabezado">ID Venta</div>
                                        <div className = "listadodeVentas letraEncabezado">Cliente</div>
                                        <div className = "listadodeVentas letraEncabezado">Producto</div>
                                        <div className = "listadodeVentas letraEncabezado">Estado</div>
                                        <div className = "listadodeVentas letraEncabezado">valor</div>
                                        <div className = "listadodeVentas letraEncabezado">Ver Información</div>
                                        <div className = "listadodeVentas letraEncabezado">Editar</div>
                                        <div className = "listadodeVentas letraEncabezado">Eliminar</div>
                                        

                                        <div className = "listadodeVentas cuadroTabla ">0001</div>
                                        <div className= "listadodeVentas cuadroTabla" > Personalizado </div>
                                        <div className= "listadodeVentas cuadroTabla"> cuaderno </div>
                                        <div className = "listadodeVentas cuadroTabla" >Disponible</div>
                                        <div className = "listadodeVentas cuadroTabla" >$45.000-$50.000</div>
                                        <div className = "cuadroTabla botonModulos letraEncabezado"><Link to = "/infoVentas" className ="link">Ver Información</Link></div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                        

                                    
                                        <div className = "listadodeVentas cuadroTabla">0002</div>
                                        <div className = "listadodeVentas cuadroTabla">Personalizado</div>
                                        <div className = "listadodeVentas cuadroTabla">llavero </div>
                                        <div className = "listadodeVentas cuadroTabla">Disponible</div>
                                        <div className = "listadodeVentas cuadroTabla">$10.000-$20.000</div>
                                        <div className = "cuadroTabla botonModulos letraEncabezado">Ver Información</div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                        

                                        
                                        <div className = "listadodeVentas cuadroTabla">0003</div>
                                        <div className = "listadodeVentas cuadroTabla">Personalizado</div>
                                        <div className = "listadodeVentas cuadroTabla ">mug</div>
                                        <div className = "listadodeVentas cuadroTabla">Disponible</div>
                                        <div className = "listadodeVentas cuadroTabla">$20.000-$40.000</div>
                                        <div className = "cuadroTabla botonModulos letraEncabezado">Ver Información</div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoGranaje} alt="Editar"/></div>
                                        <div className = "cuadroTabla botonModulos" ><img className ="icoTabla" src= {iconoBasurero} alt="Eliminar"/></div>
                                    </li>
                                    <div className = "botonAgregarVenta2 botonModulos titulo centrar"> 
                                        
                                            <span><Link to = "/agregarVenta" className ="link">Agregar Venta</Link></span>
                                        
                                    </div>
                                </ul>
                            </section>
                        </main>
                        <Footer />

                </body>
            </PrivateRoute>
        </div>
    );
}
export default ListadoVentas;
