import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainCadastrarFuncionario from "./MainCadastrarFuncionario";
import SidebarCollapse from "../../template/SidebarCollapse";
function CadastrarFuncionario() {
  return (
    <>
      <title>Cadastro de Funcionario</title>
      <AlternadorDeTema />
      <SelecionarTema />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SidebarCollapse />
          <MainCadastrarFuncionario />
        </div>
      </div>
    </>
  );
}
export default CadastrarFuncionario;
