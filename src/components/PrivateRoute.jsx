import React, {useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();

  useEffect(() => {

    const fetchAuth0Token = async ()=>{
      const accessToken = await getAccessTokenSilently({
        audience: 'api-autenticación-prana-personalizados',
      });
      console.log(accessToken)
    }
   fetchAuth0Token()
  }, [])

  console.log(isAuthenticated);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <> {children} </>
  ) : (
        <div>
        <span className="mensajeAutorización">No estas autorizado para este sitio</span>
        <Link className='link' to='/'><span className = 'botonVolverHome botonModulos titulo centrar '>Llevame al home</span></Link>
        </div>
  );
};

export default PrivateRoute;