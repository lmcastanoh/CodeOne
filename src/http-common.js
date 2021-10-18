import axios from "axios";

const getToken = () =>{
  return `Bearer ${localStorage.getItem('token')}`;
}

const executeRequest = async (options, successCallback, errorCallback) => {
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export default axios.create({
  baseURL: "http://localhost:5000/api/v1/producto",
  headers: {
    "Content-type": "application/json",
      Authorization: getToken(),
  }
});

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'http://localhost:5000/usuarios/',
    headers:{
    Authorization : getToken(),
  },
 };
 await executeRequest(options, successCallback, errorCallback);
};

export const obtenerDatosUsuarios = async (successCallback, errorCallback) => {
  const options = { 
    method: 'GET', 
    url: 'http://localhost:5000/usuarios/self',
    headers:{
      Authorization : getToken(),
  },
 };
 await executeRequest(options, successCallback, errorCallback);
};



