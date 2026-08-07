import express from "express";
import controllerProfissional from "../controller/controllerProfissional.js";

// import controllerImage from "../controller/controllerImage.js";
// import controllerVeiculo from "../controller/controllerVeiculo.js";

const routers = express();

routers.use(express.json());

routers.post("/api/cadastrar", controllerProfissional.cadastrar);
routers.get("/profissionais", controllerProfissional.listar);
routers.get("/api/profissionais/:id", controllerProfissional.listarPorId);
routers.put("/api/profissionais/:id", controllerProfissional.atualizarPorId);
routers.delete("/api/profissionais/:id", controllerProfissional.deletar);


// routers.get('/veiculos', controllerVeiculo.listar)

// routers.post('/image', controllerImage.salvar)

export default routers;
