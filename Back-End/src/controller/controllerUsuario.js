import modelUsuario from "../model/modelUsuario.js";
const controllerUsuario = {
  login: async (req, res) => {
    try {
      console.log(req.body);
      const { email, senha } = req.body;
      const resposta = await modelUsuario.ValidarLogin(email, senha);
      console.log(resposta);
      if (!resposta) {
        res.status(400).json(resposta);
      }
      res.status(200).json(resposta);
    } catch (error) {
      console.log(error);
    }
  },
};
export default controllerUsuario;
