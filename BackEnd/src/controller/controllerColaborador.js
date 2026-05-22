import modelColaborador from "../model/modelColaborador.js";

const controllerColaborador = {
  cadastrar: async (req, res) => {
    try {
      const { id_usuario, nome, idade, cidade, estado, bairro, nif } = req.body;
      if (
        !id_usuario ||
        !nome ||
        !idade ||
        !cidade ||
        !estado ||
        !bairro ||
        !nif
      ) {
        res.status(400).json({ msg: "insira todos os campos" });
      }
      const resposta = await modelColaborador.cadastrarColaborador([
        id_usuario,
        nome,
        idade,
        cidade,
        estado,
        bairro,
        nif,
      ]);

      console.log(resposta);
      if (resposta.errno) {
        res.status(500).json({ API: resposta });
      }

      if (resposta.code === "ER_DUP_ENTRY") {
        res.status(500).json({ API: "DUPLICADO" });
      } else if (resposta.affectedRows === 1)
        res.status(201).json({ API: "INSERIDO" });
    } catch (error) {
      console.log(error);
      console.log(error.code);
      res.status(500).json({ API: error });
    }
  },
  listar: async (req, res) => {
    try { {
      }
      const [resposta] = await modelColaborador.listar();

      console.log(resposta);
      res.status(200).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json({ API: error });
    }
  },
  listarPorId: async (req, res) => {
    try { {
      }
      const id = req.params.id
      console.log(id)
      const [resposta] = await modelColaborador.listar();

      console.log(resposta);
      res.status(200).json(resposta);
    } catch (error) {
      console.log(error);
      res.status(500).json({ API: error });
    }
  }
};
export default controllerColaborador;
