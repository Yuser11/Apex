import express from 'express'
import controllerRaiz from '../controller/controllerRoot.js';
import controllerUsuario from '../controller/controllerUsuario.js';
import controllerColaborador from '../controller/controllerColaborador.js';
import controllerImage from '../controller/controllerImage.js';
import controllerVeiculo from '../controller/controllerVeiculo.js';

const routers = express();

routers.use(express.json());
 
routers.get('/', controllerRaiz.raiz)

routers.post('/api/cadastrar', controllerUsuario.cadastrar)
routers.post('/login', controllerUsuario.login)

routers.get('/profissionais', controllerColaborador.listar)
routers.get('/api/profissionais/:id', controllerColaborador.listarPorId)
routers.put('/api/profissionais/:id', controllerColaborador.atualizarPorId)
routers.delete('/api/profissionais/:id', controllerColaborador.deletar)

routers.get('/veiculos', controllerVeiculo.listar)

routers.post('/image', controllerImage.salvar)

//* JSON WEB TOKEN -- JWT
//* AUTENTICAÇÃO E AUTORIZAÇÃO

//* HEADER, PAYLOAD, SIGNATURE

export default routers