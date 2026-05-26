import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Navigate } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/dashboard.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Route, Routes } from 'react-router'
//import './assets/js/dashboard'

import Home from './components/paginas/home/Home'
import CadastrarFuncionario from './components/paginas/funcionario/CadastrarFuncionario'
import Erro404 from './components/paginas/404/Erro404'
import ListarFuncionario from './components/paginas/funcionario/ListarFuncionario'
import EditarFuncionario from './components/paginas/funcionario/EditarFuncionario'
import Login from './components/Login'
import ValidaLogin from './components/ValidaLogin'
import RotaProtegida from './components/Protegida';

import CadastrarCliente from './components/paginas/cliente/CadastrarCliente'
import ListarCliente from './components/paginas/cliente/ListarClientes'
import EditarCliente from './components/paginas/cliente/EditarCliente'

import Vendas from './components/paginas/vendas/Vendas'

function App() {
  useEffect(() => {
  })
  const token = sessionStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />


        <Route
          path="/home"
          element={
            <RotaProtegida regrasPermitidas={["admin", "usuario"]}>
              <Home />
            </RotaProtegida>
          }
        />

        <Route
          path="/cadastro-funcionario"
          element={
            <RotaProtegida regrasPermitidas={["admin"]}>
              <CadastrarFuncionario />
            </RotaProtegida>
          }
        />
        <Route
          path="/listar-funcionario"
          element={
            <RotaProtegida regrasPermitidas={["admin", "usuario"]}>
              <ListarFuncionario />
            </RotaProtegida>
          }
        />
        <Route
          path="/editar-funcionario/:id"
          element={
            <RotaProtegida regrasPermitidas={["admin"]}>
              <EditarFuncionario />
            </RotaProtegida>
          }
        />
        <Route
          path="/cadastro-cliente"
          element={
            <RotaProtegida regrasPermitidas={["admin","usuario"]}>
              <CadastrarCliente/>
            </RotaProtegida>
          }
        />
        <Route
          path="/listar-cliente"
          element={
            <RotaProtegida regrasPermitidas={["admin", "usuario"]}>
              <ListarCliente/>
            </RotaProtegida>
          }
        />
        <Route
          path="/editar-cliente/:id"
          element={
            <RotaProtegida regrasPermitidas={["admin"]}>
              <EditarCliente/>
            </RotaProtegida>
          }
        />
        <Route
          path="/vendas"
          element={
            <RotaProtegida regrasPermitidas={["admin", "usuario"]}>
              <Vendas />
            </RotaProtegida>
          }
        />
        <Route
          path="/"
          element={
            token
              ? <Navigate to="/home" />
              : <Navigate to="/login" />
          }
        />
        <Route path='/*' element={<ValidaLogin pagina={<Erro404 />} />} />
      </Routes>
    </>
  )
}
export default App
