import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

function MainListarCliente() {
  const urlDadosClientes = "http://localhost:3001/clientes";
  const [Clientes, setClientes] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    async function buscarDadosCliente() {
      try {
        let resposta = await fetch(urlDadosClientes);
        let dadosFuncionario = await resposta.json();
        setClientes(dadosFuncionario);
      } catch (erro) {
        console.log(erro);
      }
    }
    buscarDadosCliente();
  }, []);

  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Clientes Cadastrados</h1>
        </div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>id:</th>
              <th>Nome:</th>
              <th>Data de nascimento:</th>
              <th>CPF:</th>
              <th>Email:</th>
              <th>Genero:</th>
            </tr>
          </thead>
          <tbody>
            {Clientes.map((Funcionario) => (
              <tr key={Funcionario.id}>
                <td>{Funcionario.id}</td>
                <td>{Funcionario.nome}</td>
                <td>{Funcionario.data_nascimento.slice(0, 10)}</td>
                <td>{Funcionario.cpf}</td>
                <td>{Funcionario.email}</td>
                <td>{Funcionario.genero}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
export default MainListarCliente;
