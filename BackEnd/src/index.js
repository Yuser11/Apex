// import express from 'express'
// import { conexao } from "./db";
import cors from 'cors'
import express from "express";
import conexao from "../config/db.js";
import routers from "./routes/router.js";
import fileUpload from 'express-fileupload'
import verificarToken from './middlewares/token.js';

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api',verificarToken);
app.use(routers);
app.use(fileUpload());


conexao.query("select 1").then(() => {
  console.log("Conexão bem sucedida");
  app.listen(3001, () => {
    console.log("Servidor executando na url http://localhost:3001");
  });
});