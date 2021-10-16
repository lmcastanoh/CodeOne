import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
    return isAuthenticated ? (
        <> {children} </>
    ) : (
        <div>
        <div className="mensajeAutorización">No estas autorizado para este sitio</div>
        <Link className='link' to='/'><span className = 'botonVolverHome botonModulos titulo centrar '>Llevame al home</span></Link>
        </div>
  );
};

export default PrivateRoute;