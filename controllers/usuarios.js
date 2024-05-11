import { usuariosModel } from "../models/usuarios.js";
import { getDataBaseError } from "../lib/errors/databaseErrors.js";

const findAll = async (req, res) => {
  try {
    const result = await usuariosModel.findAll();
    res.json({
      message: "Listado de usuarios",
      result,
    });
  } catch (error) {
    if (error.code) {
      const { code, message } = getDataBaseError(error.code);
      res.status(code).json({ message });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

const create = async (req, res) => {
  const { nombre, balance } = req.body;
  const newUsuario = {
    nombre,
    balance,
  };
  try {
    const result = await usuariosModel.create(newUsuario);
    res.json(result);
  } catch (e) {
    return e;
  }
};

const remove = async (req, res) => {
  const { id } = req.query;
  try {
    const result = await usuariosModel.remove(id);
    res.json(result);
  } catch (e) {
    return e;
  }
};

const update = async (req, res) => {
  const { nombre, balance } = req.body;
  const { id } = req.query;
  try {
    const result = await usuariosModel.update(nombre, balance, id);
    res.json(result);
  } catch (e) {
    return e;
  }
};

export const usuariosController = {
  findAll,
  create,
  remove,
  update,
};
