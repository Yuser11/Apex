import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

function MainListarVeiculo() {
  const urlDadosVeiculos = "http://localhost:3001/veiculos";
  const [Veiculos, setVeiculos] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    async function buscarDadosVeiculo() {
      try {
        let resposta = await fetch(urlDadosVeiculos);
        let dadosFuncionario = await resposta.json();
        setVeiculos(dadosFuncionario);
      } catch (erro) {
        console.log(erro);
      }
    }
    buscarDadosVeiculo();
  }, []);

  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Veiculos Cadastrados</h1>
        </div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>id:</th>
              <th>Nome:</th>
              <th>Marca:</th>
              <th>Quilimetragem:</th>
              <th>Valor:</th>
              <th>Tração:</th>
              <th>Descricão:</th>
            </tr>
          </thead>
          <tbody>
            {Veiculos.map((Veiculo) => (
              <tr key={Veiculo.id}>
                <td>{Veiculo.id}</td>
                <td>{Veiculo.nome}</td>
                <td>{Veiculo.marca}</td>
                <td>{Veiculo.quilometragem}</td>
                <td>{Veiculo.valor}</td>
                <td>{Veiculo.tracao}</td>
                <td>{Veiculo.descricao}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
export default MainListarVeiculo;
