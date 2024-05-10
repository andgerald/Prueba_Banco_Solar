import { transferenciasModel } from "../models/transferencias.js";

const findAll = async (req, res) => {
  try {
    const result = await transferenciasModel.findAll();
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};

export const transferenciasController = {
  findAll,
};
