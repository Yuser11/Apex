import { useActionState, useState } from "react";
import { toast } from "react-toastify";

function MainCadastrarVeiculo() {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState("");
  const [tracao, setTracao] = useState("");
  const [quilometragem, setQuilometragem] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [file, setFile] = useState("");

  const token = sessionStorage.getItem("token")
  
  const [estadoCadastro, acaoCadastro, pendente] = useActionState(
    async (estadoAnterior, formData) => {
      let dadosVeiculo = JSON.stringify(Object.fromEntries(formData.entries()));
      console.log(dadosVeiculo);
      try {
        let resposta = await fetch("http://localhost:3001/api/veiculo/cadastrar", {
          method: "POST",
          body: dadosVeiculo,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(resposta);
        console.log(resposta.status);
        console.log(resposta.ok);

        if (resposta.status === 201) {
          console.log("Resposta do servidor ok!");
          if (resposta.ok === true) {
            toast.success("Cadastrado com sucesso");
            setNome("");
            setAno("");
            setDescricao("");
            setQuilometragem("");
            setMarca("");
            setTracao("");
            setValor("");
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
          <h1 className="h2">Cadastrar Veiculo - {nome}</h1>
        </div>
        <form action={acaoCadastro} className="row g-3" id="meuForm">
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              Nome do veiculo:
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

          <div className="col-md-6">
            <label htmlFor="marca" className="form-label">
              Marca:
            </label>
            <input
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              type="text"
              className="form-control"
              id="marca"
              name="marca"
              placeholder="Digite o CPF"
              required
              maxlength="11"
            />
          </div>

          <div className="col-md-8">
            <label htmlFor="ano" className="form-label">
              Ano:
            </label>
            <input
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              type="ano"
              className="form-control"
              id="ano"
              placeholder="Digite o ano"
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="tracao" className="form-label">
              Tração:
            </label>
            <select
              name="tracao"
              onChange={(e) => setTracao(e.target.value)}
              className="form-control"
            >
              <option value="4x4">4x4</option>
              <option value="D">Dianteira</option>
              <option value="T">Traseira</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="quilometragem" className="form-label">
              Quilometragem:
            </label>
            <input
              value={quilometragem}
              onChange={(e) => setQuilometragem(e.target.value)}
              type="number"
              className="form-control"
              id="quilometragem"
              name="quilometragem"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="valor" className="form-label">
              Valor:
            </label>
            <input
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              type="number"
              className="form-control"
              id="valor"
              name="valor"
              required
              maxLength={9}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="descricao" className="form-label">
              Descrição:
            </label>
            <input
              onChange={(e) => setDescricao(e.target.value)}
              value={descricao}
              type="text"
              className="form-control"
              id="descricao"
              name="descricao"
              maxLength={8}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="file" className="form-label">
              Imagem do veiculos:
            </label>
            <input
              value={file}
              onChange={(e) => setFile(e.target.value)}
              type="file"
              className="form-control"
              id="file"
              name="file"
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
export default MainCadastrarVeiculo;
