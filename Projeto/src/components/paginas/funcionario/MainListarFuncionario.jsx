import { useEffect, useState,React} from "react";
import { Link } from "react-router";
import { toast } from 'react-toastify'

function MainListarFuncionario() {
  const urlDadosFuncionarios = "http://localhost:3001/profissionais";
  const [Funcionarios, setFuncionarios] = useState([]);

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
    const toastId = React.useRef(null);

  function Excluir() {
    alert("poi")
  }
  const dismiss = () =>  toast.dismiss(toastId.current);
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
              <th>REGRA:</th>
              <th>Ações:</th>
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
                <td>{Funcionario.regra}</td>
                <td>

                  <button className="me-2">
                    <Link to={`/editar-Funcionario/${Funcionario.id}`}>
                      Editar
                    </Link>
                  </button>
                  <button onClick={() => toast.info(
                    <>
                      <div >Deseja excluir?</div>
                      <button className="bg-danger " onClick={Excluir}>SIM</button>
                            <button onClick={dismiss}>Dismiss</button>
                      <button onClick={dismiss} className="bg-success">NÃO</button>

                    </>)}>Excluir</button>
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
