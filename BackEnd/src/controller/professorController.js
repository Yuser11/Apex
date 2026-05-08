import modelProfessor from "./../model/professorModel.js";

const controllerProfessor = {
  raiz: async (req, res) => {
    res.status(200).json({ msg: "a API esta online" });
  },
  cadastrar: async (req, res) => {
    try {
      const { nome, idade, cidade, estado, nif } = req.body;
      if (!nome || !idade || !cidade || !estado || !nif) {
        res.status(400).json({ msg: "insira todos os campos" });
      }
      modelProfessor.cadastrarProfessor([nome, idade, cidade, estado, nif]);
      res.status(200).json({ API: "ONLINE" });
    } catch (error) {
      console.log(error);
    }
  },
  listarTodos: async (req, res) => {
    const resultado = await modelProfessor.listarProfessor();
    console.log(resultado);
    res.status(200).json(resultado);
  },
  listarPorID: async (req, res) => {
    const id = req.params.id;
    const resultado = await modelProfessor.listarPorID(id);
    console.log(resultado[0]);
    if (resultado[0]) {
      res.status(200).json(resultado[0]);
    } else {
      res.status(404).json({ msg: "não encontrado" });
    }
  },
  listarPorNome: async (req, res) => {
    console.log(req.params);
    const nome = req.params.nome;
    const resultado = await modelProfessor.listarPorNome(nome);
    console.log(resultado[0]);
    res.status(200).json(resultado[0]);
  },
  atualizar: async (req, res) => {
    const { nome, idade, cidade, estado, nif } = req.body;
    const id = req.params.id;
    console.log(req.body);
    try {
      if (!id || !nome || !idade || !cidade || !estado || !nif) {
        res.status(400).json({ msg: "insira todos os campos" });
      } else {
        const resultado = await modelProfessor.atualizarProfessor([
          id,
          nome,
          idade,
          cidade,
          estado,
          nif,
        ]);
        console.log(resultado);
        console.log(resultado.affectedRows);
        if (resultado.affectedRows > 0) {
          res.status(200).json({ msg: "registro alterado" });
        } else {
          res.status(200).json({ msg: "não tem esse id" });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: true });
    }
  },
  deletarPorID: async (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    console.log(id);
    const resultado = await modelProfessor.deletarProfessor(id);
    console.log(resultado.affectedRows);
    if (resultado.affectedRows > 0) {
      res.status(200).json({ msg: "registro deletado" });
    } else {
      res.status(200).json({ msg: "não tem esse id" });
    }
  },
};
export default controllerProfessor;
