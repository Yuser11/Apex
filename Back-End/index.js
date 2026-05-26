// import express from 'express'
// import { conexao } from "./db";
import cors from 'cors'
import express from "express";
import conexao from "./config/db.js";
import routers from "./src/routes/router.js";
import routersCliente from "./src/routes/routerCliente.js";
import routersProfissional from "./src/routes/routerProfissional.js";
import routersUsuario from "./src/routes/routerUsuario.js";
import fileUpload from 'express-fileupload'
import verificarToken from './src/middlewares/token.js';
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const app = express();

app.use(express.json());
app.use(cors())
app.use('/api',verificarToken);
app.use(routers);
app.use(routersCliente)
app.use(routersProfissional)
app.use(routersUsuario)
app.use(fileUpload());
const swaggerDocument = YAML.load('./src/swagger.yaml')
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
)

conexao.query("select 1").then(() => {
  console.log("Conexão bem sucedida");
  app.listen(3001, () => {
    console.log("Servidor executando na url http://localhost:3001");
        console.log("Swagger executando na url http://localhost:3001/docs");

  });
});