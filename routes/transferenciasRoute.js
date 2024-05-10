import { transferenciasController } from "../controllers/transferencias.js";
import { Router } from "express";

const router = Router();

//transferencias GET: Devuelve todas las transferencias almacenadas en la base de datos en formato de arreglo.
router.get("/", transferenciasController.findAll);
router.post("/", transferenciasController.create);

export default router;
