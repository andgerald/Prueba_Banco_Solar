import "dotenv/config";
import pool from "../database/dbConfig.js";
//transferencias GET: Devuelve todas las transferencias almacenadas en la base de datos en formato de arreglo.
const findAll = async () => {
  try {
    const result = await pool.query({
      rowMode: "array",
      text: "SELECT t.emisor,u.nombre,r.nombre,t.monto, t.fecha FROM transferencias t INNER JOIN usuarios u ON u.id = t.emisor INNER JOIN usuarios r ON r.id = t.receptor",
    });
    console.log(result.rows);
    return result.rows;
  } catch (e) {
    return e;
  }
};

export const transferenciasModel = {
  findAll,
};
