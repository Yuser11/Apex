import express from "express";
import controllerVeiculo from "../controller/controllerVeiculo.js";

// import controllerImage from "../controller/controllerImage.js";
// import controllerVeiculo from "../controller/controllerVeiculo.js";

const routers = express();

routers.use(express.json());

routers.post("/api/veiculo/cadastrar", controllerVeiculo.cadastrar);
routers.get("/veiculos", controllerVeiculo.listar);
routers.get("/api/veiculos/:id", controllerVeiculo.listarPorId);

export default routers;
