import "dotenv/config";
import pool from "../database/dbConfig.js";

//usuarios GET: Devuelve todos los usuarios registrados con sus balances.
const findAll = async () => {
  let message;
  const result = await pool.query("SELECT * FROM usuarios");
  rows.length == 0
    ? (mensaje = "No hay registros en la tabla")
    : (mensaje = "Lista de registros encontrados");
  return {
    result,
    message: message,
  };
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

//usuario DELETE: Recibe el id de un usuario registrado y lo elimina
const remove = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM usuarios WHERE id=$1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (e) {
    return e;
  }
};

const update = async (nombre, balance, id) => {
  try {
    const result = await pool.query(
      "UPDATE usuarios SET nombre=$1, balance=$2 WHERE id=$3 RETURNING *",
      [nombre, balance, id]
    );

    return result.rows[0];
  } catch (e) {
    return e;
  }
};

export const usuariosModel = {
  findAll,
  create,
  remove,
  update,
};
