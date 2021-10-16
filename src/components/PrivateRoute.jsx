import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({childen}) => {
    const {isAuthenticated, isLoading} = useAuth0();

    if(isLoading) return <div>Loading...</div>;

    return isAuthenticated ? <>{childen}</>:<div>No estas autorizado para ver este sitio.</div>


}

export default PrivateRoute
