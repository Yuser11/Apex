import express from "express";
import controllerCliente from "../controller/controllerCliente.js";

// import controllerImage from "../controller/controllerImage.js";
// import controllerVeiculo from "../controller/controllerVeiculo.js";

const routers = express();

routers.use(express.json());

routers.post("/api/cliente/cadastrar", controllerCliente.cadastrar);
routers.get("/clientes", controllerCliente.listar);
routers.get("/api/clientes/:id", controllerCliente.listarPorId);

export default routers;
