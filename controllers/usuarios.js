import { usuariosModel } from "../models/usuarios.js";

const findAll = async (req, res) => {
  try {
    const result = await usuariosModel.findAll();
    return res.json(result);
  } catch (e) {
    console.log(e);
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
    return res.json(result);
  } catch (e) {
    return e;
  }
};

const remove = async (req, res) => {
  const { id } = req.query;
  try {
    const result = await usuariosModel.remove(id);
    return res.json(result);
  } catch (e) {
    return e;
  }
};

export const usuariosController = {
  findAll,
  create,
  remove,
};
