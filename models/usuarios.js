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

//usuario POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
const create = async (usuario) => {
  try {
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, balance) values($1,$2) RETURNING *",
      [usuario.nombre, usuario.balance]
    );
    return result.rows[0];
  } catch (e) {
    return e;
  }
};

export const usuariosModel = {
  findAll,
  create,
};
