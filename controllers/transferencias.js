import { transferenciasModel } from "../models/transferencias.js";

const findAll = async (req, res) => {
  try {
    const result = await transferenciasModel.findAll();
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};

const create = async (req, res) => {
  try {
    const { emisor, receptor, monto } = req.body;
    const newTransferencia = {
      emisor,
      receptor,
      monto,
    };
    const result = await transferenciasModel.create(newTransferencia);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: "Error al crear la transferencia" });
    return e;
  }
};

export const transferenciasController = {
  findAll,
  create,
};
