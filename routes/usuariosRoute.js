import { usuariosController } from "../controllers/usuarios.js";
import { Router } from "express";

const router = Router();
/// GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba
router.get("/", usuariosController.findAll);
//usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
router.post("/", usuariosController.create);
//usuario DELETE: Recibe el id de un usuario registrado y lo elimina
router.delete("/", usuariosController.remove);
//usuario PUT: Recibe los datos modificados de un usuario registrado y los actualiza
router.put("/", usuariosController.update);
export default router;
