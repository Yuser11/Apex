import { useEffect, useState } from "react";
import { Link } from "react-router";
function MainListarFuncionario() {
  const urlDadosFuncionario = "http://localhost:3001/profissionais";
  const [Funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    async function buscarDadosFuncionario() {
      try {
        let resposta = await fetch(urlDadosFuncionario);
        let dadosFuncionario = await resposta.json();
        setFuncionarios(dadosFuncionario);
      } catch (erro) {
        console.log(erro);
      }
    }
    buscarDadosFuncionario();
  }, []);

  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Funcionarios Cadastrados</h1>
        </div>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>id:</th>
              <th>Nome:</th>
              <th>Sobrenome:</th>
              <th>Ações:</th>
            </tr>
          </thead>
          <tbody>
            {Funcionarios.map((Funcionario) => (
              <tr key={Funcionario.id}>
                <td>{Funcionario.nome}</td>
                <td>{Funcionario.data_nascimento}</td>
                <td>{Funcionario.cpf}</td>
                <td>{Funcionario.modalidade}</td>
                <td>{Funcionario.regra}</td>
                <td>
                  <Link to={`/editar-Funcionario/${Funcionario.id}`}>
                    Editar
                  </Link>
                  <button className="me-2">Editar</button>
                  <button>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
export default MainListarFuncionario;
