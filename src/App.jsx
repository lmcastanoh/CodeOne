import Index from 'pages/index.jsx';
import AgregarProductos from 'pages/agregarProductos.jsx';
import AgregarUsuario from 'pages/agregarUsuario.jsx';
import AgregarVentas from 'pages/agregarVentas.jsx';
import 'styles/estilos.css';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

function App() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route><AgregarProductos path = "/agregarProductos"/></Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route> </Route>
            <Route><Index path="/"/> </Route>
            
          </Switch>
        </Router>
  
  
        
      </div>
    );
  }
  export default App;
