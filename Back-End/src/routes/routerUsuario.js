import express from "express";
import controllerUsuario from "../controller/controllerUsuario.js";

// import controllerImage from "../controller/controllerImage.js";
// import controllerVeiculo from "../controller/controllerVeiculo.js";

const routers = express();

routers.use(express.json());

routers.post("/login", controllerUsuario.login);


// routers.get('/veiculos', controllerVeiculo.listar)

// routers.post('/image', controllerImage.salvar)

export default routers;
