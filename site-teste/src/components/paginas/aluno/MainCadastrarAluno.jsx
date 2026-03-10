import { useActionState, useState } from "react";




function MainCadastrarAluno() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobreNome] = useState('');

    const [email, setEmail] = useState('');

    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [endereço, setEndereço] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    let urlViaCep = `https://viacep.com.br/ws/${cep}/json/`

    async function buscarDadosCep() {
        try {
            let resposta = await fetch(urlViaCep)
            let dadosCep = await resposta.json()
            setCidade(dadosCep.logradouro)
            console.log(cidade)
            setCidade(dadosCep.localidade)
            setEstado(dadosCep.estado)
            setComplemento(dadosCep.complemento)
            setEndereço(dadosCep.logradouro)
            console.log("achei")




        } catch (error) {
            console.log(error)
        }
    }

    
    let [estadoCadastro, acaoCadastro, pendente] = useActionState()

    try {
        [estadoCadastro, acaoCadastro, pendente] =
            useActionState(
                async (estadoAnterior, FormData) => {
                    let dados = JSON.stringify(Object.fromEntries(FormData))
                    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        body: dados,
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    console.log(resposta.ok)
                    console.log(resposta.status)
                    console.log(resposta)

                    
                    setNome('')
                    setSobreNome('')
                    setEmail('')
                    setCep('')
                    setCidade('')
                    setEstado('')
                    setEndereço('')
                    setNumero('')
                    setComplemento('')
                })
                

    } catch (err) {
        console.log(err)
    }


    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
                >
                    <h1 className="h2">Cadastrar Alunos - {nome + ' ' + sobrenome}</h1>
                </div>
                <form action={acaoCadastro} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="form-control" id="nome" name="nome" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                        <input value={sobrenome} onChange={(e) => setSobreNome(e.target.value)} type="text" className="form-control" id="sobrenome" name="sobrenome" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" name="email " required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cep" className="form-label">CEP</label>
                        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} className="form-control" onBlur={(e) => buscarDadosCep(e.target.value)} id="cep" name="cep" required />
                    </div>

                    <div className="col-md-4">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input value={cidade} type="text" className="form-control" id="cidade" name="cidade" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <input value={estado} type="text" className="form-control" id="estado" name="estado" required />

                    </div>

                    <div className="col-10">
                        <label htmlFor="endereco" className="form-label">Endereço</label>
                        <input value={endereço} type="text" className="form-control" id="endereco" name="endereco" placeholder="Rua, avenida..." required />
                    </div>
                    <div className="col-2">
                        <label htmlFor="numero" className="form-label">Número</label>
                        <input value={numero} onChange={(e) => setNumero(e.target.value)} type="text" className="form-control" id="numero" name="numero" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="complemento" className="form-label">Complemento</label>
                        <input value={complemento} type="text" className="form-control" id="complemento" name="complemento" required />
                    </div>

                    <div className="col-12">
                        <button disabled={pendente} type="submit" className="btn btn-primary">{pendente ? "Cadastrando" : "Cadastrar"}</button>
                    </div>
                </form>

            </main>
        </>
    );
}
export default MainCadastrarAluno;