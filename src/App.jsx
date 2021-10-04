import Index from 'pages';
import agregarProductos from 'pages';
import 'styles/estilos.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route>
              <Index path= "/index"/>
            </Route>
            <Route>
              <agregarProductos path= "/agregarProductos"/>
            </Route>

          </Switch>

        </Router>
        
        
       
 


      </div>
    );
  }
  export default App;
