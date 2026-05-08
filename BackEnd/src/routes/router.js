import express from 'express'
import controllerRaiz from '../controller/controllerRoot.js';
import controllerUsuario from '../controller/controllerUsuario.js';
import controllerProduto from '../controller/controllerProduto.js';
import controllerColaborador from '../controller/controllerColaborador.js';
import controllerImage from '../controller/controllerImage.js';

const routers = express();

routers.use(express.json());
 
routers.get('/', controllerRaiz.raiz)

routers.post('/api/cadastrar', controllerUsuario.cadastrar)
routers.post('/login', controllerUsuario.login)

routers.post('/produto', controllerProduto.cadastrar)
routers.get('/produto', controllerProduto.listar)
routers.delete('/produto/:id', controllerProduto.deletar)
routers.put('/produto/:id', controllerProduto.atualizarPorID)
routers.get('/produto/:id', controllerProduto.listarPorID)

routers.post('/colaborador', controllerColaborador.cadastrar)

routers.post('/image', controllerImage.salvar)

//* JSON WEB TOKEN -- JWT
//* AUTENTICAÇÃO E AUTORIZAÇÃO

//* HEADER, PAYLOAD, SIGNATURE

export default routers