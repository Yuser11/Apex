import express from 'express'
import controllerRaiz from '../controller/controllerRoot.js';
import controllerUsuario from '../controller/controllerUsuario.js';
import controllerColaborador from '../controller/controllerColaborador.js';
import controllerImage from '../controller/controllerImage.js';
import controllerVeiculo from '../controller/controllerVeiculo.js';

const routers = express();

routers.use(express.json());
 
routers.get('/', controllerRaiz.raiz)

routers.post('/cadastrar', controllerUsuario.cadastrar)
routers.post('/login', controllerUsuario.login)

routers.post('/colaborador', controllerColaborador.cadastrar)

routers.get('/veiculos', controllerVeiculo.listar)

routers.post('/image', controllerImage.salvar)

//* JSON WEB TOKEN -- JWT
//* AUTENTICAÇÃO E AUTORIZAÇÃO

//* HEADER, PAYLOAD, SIGNATURE

export default routers