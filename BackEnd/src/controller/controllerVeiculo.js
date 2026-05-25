import modelVeiculo from "../model/modelVeiculo.js";
const controllerVeiculo = {
  cadastrar: async (req, res) => {
    try {
      const { nome, quantidade, valor, codigo } = req.body;
      if (!nome || !quantidade || !valor || !codigo) {
        res.status(400).json({ msg: "insira todos os campos" });
      }
      const [resposta] = await modelVeiculo.cadastrar([
        nome,
        quantidade,
        valor,
        codigo,
      ]);
      console.log(resposta);
      if (resposta.code === "ER_DUP_ENTRY") {
        res.status(500).json({ API: "DUPLICADO" });
      } else if (resposta.affectedRows === 1) {
        res.status(201).json({ API: "INSERIDO" });
      } else {
        res.status(500).json({ API: resposta });
      }
    } catch (error) {
      console.log(error);
      console.log(error.code);
      res.status(500).json({ API: "erro:", error });
    }
  },

  listar: async (req, res) => {
    try {
      const [resposta] = await modelVeiculo.listar();
      console.log(resposta);
      res.status(200).json(resposta);
    } catch (error) {
      console.log(error);
    }
  },

  deletar: async (req, res) => {
    try {
      const id = req.params.id;
      console.log(req);
      const resposta = await modelVeiculo.deletar(id);
      console.log(resposta[0]);
      if (resposta.affectedRows === 1) {
        res.status(204).json({ MSG: "Registro deletado com sucesso" });
      } else {
        res.status(404).json({ MSG: "Registro não deletado" });
      }
    } catch (error) {
      console.log(error);
    }
  },

  listarPorID: async (req, res) => {
    try {
      const id = req.params.id;
      const resposta = await modelVeiculo.listarPorID(id);
      console.log(resposta[0]);
      res.status(200).json(resposta);
    } catch (error) {
      console.log(error);
    }
  },

  atualizarPorID: async (req, res) => {
    try {
      const id = req.params.id;
      const { nome, quantidade, valor } = req.body;
      const resposta = await modelVeiculo.atualizarPorID([
        id,
        nome,
        quantidade,
        valor,
      ]);
      console.log(resposta.affectedRows);
      if (resposta.affectedRows === 1) {
        res.status(200).json({ MSG: "Registro alterado com sucesso" });
      } else {
        res.status(404).json({ MSG: "Registro não alterado" });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
export default controllerVeiculo;
