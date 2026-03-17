import { useEffect, useState } from "react";
import { Link } from "react-router";
function MainListarAluno() {

    const urlDadosAluno = 'https://jsonplaceholder.typicode.com/users';
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function buscarDadosAluno() {
            try {
                let resposta = await fetch(urlDadosAluno);
                let dadosAluno = await resposta.json();
                setAlunos(dadosAluno);
            } catch (erro) {
                console.log(erro);
            }
        }
        buscarDadosAluno();
    },[]);


    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                >
                    <h1 className="h2">Alunos Cadastrados</h1>
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
                    {
                        alunos.map( (aluno) => (
                         <tr key={aluno.id}>
                         <td>{aluno.id}</td>
                         <td>{aluno.name}</td>
                         <td>{aluno.username}</td>
                         <td>
                         <Link to={`/editar-aluno/${aluno.id}`}>Editar</Link>
                         <button className="me-2">Editar</button>
                         <button>Excluir</button>
                         </td>
                         </tr>
                        ))
                    }
                    </tbody>

                </table>

            </main>
        </>
    );
}
export default MainListarAluno;