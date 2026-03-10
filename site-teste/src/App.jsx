import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/dashboard.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Routes,Route } from 'react-router'
import Home from './components/paginas/home/Home'
import CadastrarAluno from './components/paginas/aluno/CadastrarAluno'
import Erro404 from './components/paginas/404/Erro404'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro-aluno' element={<CadastrarAluno/>}/>
        <Route path='/*' element={<Erro404/>}/>
      </Routes>
    </>
  )
}
export default App;
