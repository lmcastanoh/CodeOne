import axios from "axios";

const getToken = () =>{
  return `Bearer ${localStorage.getItem('token')}`;
}

export default axios.create({
  baseURL: "http://localhost:5000/api/v1/producto",
  headers: {
    "Content-type": "application/json",
      Authorization: getToken(),
  }
});
