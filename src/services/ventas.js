import http from "../http-common";


class Ventas {
  getAll(page = 0) {
    return http.get("/ventas");
  }

<<<<<<< HEAD
  createUsuario(data) {
    return http.post("/ventas", data);
  }

  updateUsuario(data) {
    return http.put("/ventas", data);
  }

  deleteUsuario(id_usuario) {
    return http.delete(`/ventas?id=${id_usuario}`, {data:{id_usuario: id_usuario}});
=======
  createVentas(data) {
    return http.post("/ventas", data);
  }

  updateVentas(data) {
    return http.put("/ventas", data);
  }

  deleteVentas(id_ventas) {
    return http.delete(`/ventas?id=${id_ventas}`, {data:{id_ventas: id_ventas}});
>>>>>>> 3c9701fb1e6dfbc98fffcc313ef2bd8e5c42122f
  }

}

export default new Ventas();

