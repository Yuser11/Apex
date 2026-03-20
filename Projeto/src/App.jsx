import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/dashboard.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import './assets/js/dashboard'
import Home from './components/paginas/home/Home'
import CadastrarFuncionario from './components/paginas/Funcionario/CadastrarFuncionario'
import Erro404 from './components/paginas/404/Erro404'
import ListarFuncionario from './components/paginas/Funcionario/ListarFuncionario'
import EditarFuncionario from './components/paginas/Funcionario/EditarFuncionario'
import Login from './components/Login'
import { Route, Routes } from 'react-router'
import ValidaLogin from './components/ValidaLogin'
import { useEffect } from 'react'
import { toast } from 'react-toastify'


function App() {
  useEffect(() => {
    toast.success('Aluno cadastrado com sucesso')
    toast.error('Erro ao cadastrar aluno')
  })

  return (
    <>
      <Routes>
        <Route path='/' element={<ValidaLogin pagina={<Home />}/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cadastro-Funcionario' element={<ValidaLogin pagina={<CadastrarFuncionario />}/>}/>
        <Route path='/listar-Funcionario' element={<ValidaLogin pagina={<ListarFuncionario />}/>}/>
        <Route path='/editar-Funcionario/:id' element={<ValidaLogin pagina={<EditarFuncionario />}/>}/>
        <Route path='/*' element={<ValidaLogin pagina={<Erro404 />}/>}/>
      </Routes>
    </>
  )
}
export default App
