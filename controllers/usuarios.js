import { usuariosModel } from "../models/usuarios.js";

const findAll = async (req, res) => {
  try {
    const result = await usuariosModel.findAll();
    return res.json(result);
  } catch (e) {
    console.log(e);
  }
};

export const usuariosController = {
  findAll,
};
