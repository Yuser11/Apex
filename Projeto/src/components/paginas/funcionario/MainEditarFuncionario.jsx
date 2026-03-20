import { useParams } from "react-router";
import { useState, useActionState, useEffect } from "react";
function MainEditarFuncionario() {

    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState('');

    let urlViaCep = `https://viacep.com.br/ws/${cep}/json/ `;

    async function buscarDadosCep() {
        try {
            let resposta = await fetch(urlViaCep);
            let dadosCep = await resposta.json();
            setEndereco(dadosCep.logradouro);
            console.log(dadosCep);
        }
        catch (erro) {
            console.log(erro);
        }
    }

    const [estadoAtualizar, acaoAtualizar, pendente]
        = useActionState(
            async (estadoAnterior, formData) => {
                let dadosFuncionario = JSON.stringify(
                    Object.fromEntries(formData.entries()));
                // Simula uma espera em segundos
                await new Promise((resolve) => setTimeout(
                    resolve, 2000
                ));
                console.log(dadosFuncionario);
                try {
                    let resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                        method: 'POST',
                        body: dadosFuncionario,
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    console.log(resposta);
                    console.log(resposta.status);
                    console.log(resposta.ok);

                    if (resposta.status === 201) {
                        console.log('Resposta do servidor ok!');
                        if (resposta.ok === true) {
                            alert('Cadastrado com sucesso');
                            setNome('');
                            setSobrenome('');
                        } else {
                            alert('Erro ao cadastrar!');
                        }
                    } else {
                        console.log('Resposta do servidor erro!');
                    }
                } catch (erro) {
                    console.log(erro);
                }


            }
        );

    useEffect(() => {
        async function getDadosFuncionario() {
            let resposta = await
                fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            let dadosFuncionario = await resposta.json();
            console.log(dadosFuncionario);
            setNome(dadosFuncionario.name);
            setSobrenome(dadosFuncionario.username);
            setEmail(dadosFuncionario.email);
            setEndereco(dadosFuncionario.address.street);
            setCidade(dadosFuncionario.address.city);
            setEstado(dadosFuncionario.address.suite);

        }
        getDadosFuncionario();

    }, [id]);

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                >
                    <h1 className="h2">Editar Funcionario: {id}</h1>
                </div>

                <form action={acaoAtualizar} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="nome" className="form-label">Nome:</label>
                        <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome" name="nome" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="sobrenome" className="form-label">Sobrenome:</label>
                        <input value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} type="text" className="form-control" id="sobrenome" name="sobrenome" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" name="email" placeholder="Digite seu melhor email" required />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="cep" className="form-label">Cep:</label>
                        <input value={cep} onBlur={(e) => buscarDadosCep(e.target.value)} onChange={(e) => setCep(e.target.value)} type="text" className="form-control" id="cep" name="cep" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cidade" className="form-label">Cidade:</label>
                        <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" className="form-control" id="cidade" name="cidade" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <input value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control" id="estado" name="estado" required />

                    </div>

                    <div className="col-12">
                        <label htmlFor="endereco" className="form-label">Endereço:</label>
                        <input value={endereco} onChange={(e) => setEndereco(e.target.value)} type="text" className="form-control" id="endereco" name="endereco" placeholder="Rua, Avenida..." required />
                    </div>

                    <div className="col-12">
                        <button disabled={pendente} type="submit" className="btn btn-primary">
                            {pendente ? 'Atualizando...' : 'Atualizar'}
                        </button>
                    </div>
                </form>


            </main>
        </>
    );
}
export default MainEditarFuncionario;
