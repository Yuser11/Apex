import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainCadastrarVeiculo from "./MainCadastrarVeiculo";
import SidebarCollapse from "../../template/SidebarCollapse";
function CadastrarVeiculo() {
  return (
    <>
      <title>Cadastro de Funcionario</title>
      <AlternadorDeTema />
      <SelecionarTema />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SidebarCollapse />
          <MainCadastrarVeiculo />
        </div>
      </div>
    </>
  );
}
export default CadastrarVeiculo;
