import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

function MainListarFuncionario() {
  const urlDadosFuncionarios = "http://localhost:3001/profissionais";
  const [Funcionarios, setFuncionarios] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    async function buscarDadosFuncionario() {
      try {
        let resposta = await fetch(urlDadosFuncionarios);
        let dadosFuncionario = await resposta.json();
        setFuncionarios(dadosFuncionario);
      } catch (erro) {
        console.log(erro);
      }
    }
    buscarDadosFuncionario();
  }, []);
  const regra = sessionStorage.getItem("regra");
  const toastId = React.useRef(null);
  async function Excluir(id) {
    try {
      let resposta = await fetch(
        `http://localhost:3001/api/profissionais/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(resposta);
      console.log(resposta.status);
      console.log(resposta.ok);

      if (resposta.status === 204) {
        console.log("Resposta do servidor ok!");
        if (resposta.ok === true) {
          toast.success("Deletado com sucesso");
        } else {
          toast.error(resposta.data);
        }
      } else {
        console.log("Resposta do servidor erro!");
      }
    } catch (erro) {
      console.log(erro);
    }
  }
  const dismiss = () => toast.dismiss(toastId.current);

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
              <th>Data de nascimento:</th>
              <th>CPF:</th>
              <th>MODALIDADE:</th>
              <th>CEP:</th>
              <th>TELEFONE:</th>
              <th>REGRA:</th>
              {regra === "admin" && (
                <>
                  <th>Ações:</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {Funcionarios.map((Funcionario) => (
              <tr key={Funcionario.id}>
                <td>{Funcionario.id}</td>
                <td>{Funcionario.nome}</td>
                <td>{Funcionario.data_nascimento.slice(0, 10)}</td>
                <td>{Funcionario.cpf}</td>
                <td>{Funcionario.modalidade}</td>
                <td>{Funcionario.cep}</td>
                <td>{Funcionario.movel}</td>
                <td>{Funcionario.regra}</td>
                {regra === "admin" && (
                  <>
                    <td>
                      <button className="me-2">
                        <Link to={`/editar-funcionario/${Funcionario.id}`}>
                          Editar
                        </Link>
                      </button>
                      <button
                        onClick={() =>
                          toast.info(
                            <>
                              <div>Deseja excluir?</div>
                              <button
                                className="bg-danger "
                                onClick={() => Excluir(Funcionario.id)}
                              >
                                SIM
                              </button>
                              <button onClick={dismiss} className="bg-success">
                                NÃO
                              </button>
                            </>,
                          )
                        }
                      >
                        Excluir
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
export default MainListarFuncionario;
