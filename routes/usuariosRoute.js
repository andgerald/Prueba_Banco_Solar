import { usuariosController } from "../controllers/usuarios.js";
import { Router } from "express";

const router = Router();
/// GET: Devuelve la aplicación cliente disponible en el apoyo de la prueba
router.get("/", usuariosController.findAll);
router.post("/", usuariosController.create);
router.delete("/", usuariosController.remove);

export default router;
