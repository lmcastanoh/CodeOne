import http from "../http-common";

class Productos {
  getAll(page = 0) {
    return http.get("/");
  }

  createProducto(data) {
    return http.post("/productos", data);
  }

  updateProducto(data) {
    return http.put("/productos", data);
  }

  deleteProducto(id_producto) {
    return http.delete(`/productos?id=${id_producto}`, {data:{id_producto: id_producto}});
  }

}

export default new Productos();