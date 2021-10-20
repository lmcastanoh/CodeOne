import http from "../http-common";


class Ventas {
  getAll(page = 0) {
    return http.get("/ventas");
  }

  createUsuario(data) {
    return http.post("/ventas", data);
  }

  updateUsuario(data) {
    return http.put("/ventas", data);
  }

  deleteUsuario(id_usuario) {
    return http.delete(`/ventas?id=${id_usuario}`, {data:{id_usuario: id_usuario}});
  }

}

export default new Ventas();

