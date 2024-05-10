import "dotenv/config";
import pool from "../database/dbConfig.js";

//usuarios GET: Devuelve todos los usuarios registrados con sus balances.
const findAll = async () => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    return result.rows;
  } catch (e) {
    return e;
  }
};

export const usuariosModel = {
  findAll,
};
