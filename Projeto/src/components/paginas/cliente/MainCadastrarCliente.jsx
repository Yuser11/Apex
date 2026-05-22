import { useActionState, useState } from "react";
import { toast } from 'react-toastify'

function MainCadastrarCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telefoneFixo, setTelefoneFixo] = useState(null);
  const [contatoEmergencia, setContatoEmergencia] = useState(null);
  const [modalidade, setModalidade] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [senha, setSenha] = useState("mudar123");
  const [senhaOculta, setSenhaOculta] = useState(true);
  const [dataIngresso, setDataIngresso] = useState("");
  const [regra, setRegra] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const token = sessionStorage.getItem("token")

  let urlViaCep = `https://viacep.com.br/ws/${cep}/json/ `;

  async function buscarDadosCep() {
    try {
      let resposta = await fetch(urlViaCep);
      let dadosCep = await resposta.json();
      setEndereco(dadosCep.logradouro);
      setCidade(dadosCep.localidade);
      setBairro(dadosCep.bairro)
      setEstado(dadosCep.uf);
      setComplemento(dadosCep.complemento);
      console.log(dadosCep);
    } catch (erro) {
      console.log(erro);
    }
  }

  const [estadoCadastro, acaoCadastro, pendente] = useActionState(
    async (estadoAnterior, formData) => {
      let dadosFuncionario = JSON.stringify(Object.fromEntries(formData.entries()));
      console.log(dadosFuncionario)
      // Simula uma espera em segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(dadosFuncionario);
      try {
        let resposta = await fetch(
          "http://localhost:3001/api/cadastrar",
          {
            method: "POST",
            body: dadosFuncionario,
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": `Bearer ${token}`
            }
          },
        );
        console.log(resposta);
        console.log(resposta.status);
        console.log(resposta.ok);

        if (resposta.status === 201) {
          console.log("Resposta do servidor ok!");
          if (resposta.ok === true) {
            toast.success("Cadastrado com sucesso");
            setNome("");
            setEmail("");
            setCpf("");
            setDataNascimento("");
            setRegra("");
            setModalidade("");
            setSenha("mudar123");
            setDataIngresso("");

            setCidade("");
            setEstado("");
            setCep("");
            setEndereco("");
            setComplemento("");
            setNumero("");
            setBairro("");

            setTelefone("");
            setTelefoneFixo("");
            setContatoEmergencia("");
          } else {
            toast.error("Erro ao cadastrar!");
          }
        } else {
            toast.error("Erro ao cadastrar!");
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
            <label htmlFor="dataNascimento" className="form-label">
              Data de nascimento:
            </label>
            <input
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              type="date"
              className="form-control"
              id="dataNascimento"
              name="dataNascimento"
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
              maxLength={11}
            />
          </div>

          <div className="col-md-7">
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
              placeholder="Digite o email"
              required
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="senha" className="form-label">
              Senha:
            </label>
            <div className="d-flex">

              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type={senhaOculta ? 'password' : 'text'}
                className="form-control"
                id="senha"
                name="senha"
                placeholder={senhaOculta ? '********' : 'Digite sua senha'}
                required
              />
              <div onClick={() => setSenhaOculta(!senhaOculta)}>
                mudar
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="telefone" className="form-label">
              Telefone:
            </label>
            <input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              type="tel"
              className="form-control"
              id="telefone"
              name="telefone"
              required
              maxLength={9}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="telefoneFixo" className="form-label">
              Telefone Fixo:
            </label>
            <input
              value={telefoneFixo}
              onChange={(e) => setTelefoneFixo(e.target.value)}
              type="tel"
              className="form-control"
              id="telefoneFixo"
              name="telefoneFixo"
              required
              maxLength={8}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="contatoEmergencia" className="form-label">
              Contato Emergencia:
            </label>
            <input
              value={contatoEmergencia}
              onChange={(e) => setContatoEmergencia(e.target.value)}
              type="tel"
              className="form-control"
              id="contatoEmergencia"
              name="contatoEmergencia"
              required
              maxLength={9}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="modalidade" className="form-label">
              Modalidade:
            </label>
            <select name="modalidade"
              onChange={(e) => setModalidade(e.target.value)}
              className="form-control"
            >
              <option value="presencial">Presencial</option>
              <option value="hibrido" selected>Híbrido</option>
              <option value="remoto">Remoto</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="dataIngresso" className="form-label">
              Data de Ingresso:
            </label>
            <input
              value={dataIngresso}
              onChange={(e) => setDataIngresso(e.target.value)}
              type="date"
              className="form-control"
              id="dataIngresso"
              name="dataIngresso"
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="regra" className="form-label">
              Regra:
            </label>
            <select name="regra"
              onChange={(e) => setRegra(e.target.value)}
              className="form-control"
            >
              <option value="admin">Admin</option>
              <option value="usuario" selected>Usuário</option>
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="cep" className="form-label">
              Cep:
            </label>
            <input
              value={cep}
              onBlur={(e) => buscarDadosCep(e.target.value)}
              onChange={(e) => setCep(e.target.value)}
              type="number"
              className="form-control"
              id="cep"
              name="cep"
              maxLength={8}
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
            <label htmlFor="bairro" className="form-label">
              Bairro:
            </label>
            <input
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              type="text"
              className="form-control"
              id="bairro"
              name="bairro"
              required
            />
          </div>

          <div className="col-md-2">
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

          <div className="col-8">
            <label htmlFor="rua" className="form-label">
              Endereço:
            </label>
            <input
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              type="text"
              className="form-control"
              id="rua"
              name="rua"
              placeholder="Rua, Avenida..."
              required
            />
          </div>
          <div className="col-2">
            <label htmlFor="numero" className="form-label">
              Número:
            </label>
            <input
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              type="num"
              className="form-control"
              id="numero"
              name="numero"
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
export default MainCadastrarCliente;
