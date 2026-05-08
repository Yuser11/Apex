import { useActionState, useState } from "react";
import Dropzone from "../../DropzoneComponent";

function MainCadastrarFuncionario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [modalidade, setModalidade] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [arquivos, setArquivos] = useState([]);

  let urlViaCep = `https://viacep.com.br/ws/${cep}/json/ `;

  async function buscarDadosCep() {
    try {
      let resposta = await fetch(urlViaCep);
      let dadosCep = await resposta.json();
      setEndereco(dadosCep.logradouro);
      setCidade(dadosCep.localidade);
      setEstado(dadosCep.uf);
      console.log(dadosCep);
    } catch (erro) {
      console.log(erro);
    }
  }

  const [estadoCadastro, acaoCadastro, pendente] = useActionState(
    async (estadoAnterior, formData) => {
      let dadosFuncionario = JSON.stringify(
        Object.fromEntries(formData.entries()),
      );
      // Simula uma espera em segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(dadosFuncionario);
      try {
        let resposta = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: dadosFuncionario,
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          },
        );
        console.log(resposta);
        console.log(resposta.status);
        console.log(resposta.ok);

        if (resposta.status === 201) {
          console.log("Resposta do servidor ok!");
          if (resposta.ok === true) {
            alert("Cadastrado com sucesso");
            setNome("");
          } else {
            alert("Erro ao cadastrar!");
          }
        } else {
          console.log("Resposta do servidor erro!");
        }
      } catch (erro) {
        console.log(erro);
      }
    },
  );

  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Cadastrar Funcionario - {nome}</h1>
        </div>
        <form action={acaoCadastro} className="row g-3" id="meuForm" >
          <div className="col-md-4">
            <label htmlFor="nome" className="form-label">
              Nome Completo:
            </label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Digite seu melhor email"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="cpf" className="form-label">
              CPF:
            </label>
            <input
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              type="text"
              className="form-control"
              id="cpf"
              name="cpf"
              placeholder="Digite seu CPF"
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="nascimento" className="form-label">
              Data de nascimento:
            </label>
            <input
              value={nascimento}
              onChange={(e) => setNascimento(e.target.value)}
              type="date"
              className="form-control"
              id="nascimento"
              name="nascimento"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="telefone" className="form-label">
              Telefone:
            </label>
            <input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              type="text"
              className="form-control"
              id="telefone"
              name="telefone"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="modalidade" className="form-label">
              Modalidade:
            </label>
            <input
              value={modalidade}
              onChange={(e) => setModalidade(e.target.value)}
              type="text"
              className="form-control"
              id="modalidade"
              name="modalidade"
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="cep" className="form-label">
              Cep:
            </label>
            <input
              value={cep}
              onBlur={(e) => buscarDadosCep(e.target.value)}
              onChange={(e) => setCep(e.target.value)}
              type="text"
              className="form-control"
              id="cep"
              name="cep"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="cidade" className="form-label">
              Cidade:
            </label>
            <input
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              type="text"
              className="form-control"
              id="cidade"
              name="cidade"
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <input
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              type="text"
              className="form-control"
              id="estado"
              name="estado"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="endereco" className="form-label">
              Endereço:
            </label>
            <input
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              type="text"
              className="form-control"
              id="endereco"
              name="endereco"
              placeholder="Rua, Avenida..."
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="complemento" className="form-label">
              Complemento:
            </label>
            <input
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              type="text"
              className="form-control"
              id="complemento"
              name="complemento"
              placeholder="Apartamento..."
            />
          </div>

          <div className="col-12 ">
            <Dropzone />
          </div>
          
          <div className="col-12 ">
            <button
              disabled={pendente}
              type="submit"
              className="btn btn-primary"
            >
              {pendente ? "Cadastrando..." : "Cadastrar"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
export default MainCadastrarFuncionario;
