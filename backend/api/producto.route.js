import express from "express"
import ProductoCtrl from "./producto.controller.js"

const router = express.Router()

/*router.route("/").get((req, res) => res.send("Hello world"))*/
router.route("/").get(ProductoCtrl.apiGetProducto)
/*router.route("/id/:id").get(ProductoCtrl.apiGetProductoById)
router.route("/descripcion").get(ProductoCtrl.apiGetProductoDescripcion)
router.route("/valorunitario").get(ProductoCtrl.apiGetProductoValorunitario)
router.route("/estado").get(ProductoCtrl.apiGetProductoEstado)*/

router
  .route("/productos")
  .post(ProductoCtrl.apiPostProducto)
  .put(ProductoCtrl.apiUpdateProducto)
  .delete(ProductoCtrl.apiDeleteProducto)

export default router