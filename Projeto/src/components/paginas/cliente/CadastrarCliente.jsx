import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainCadastrarCliente from "./MainCadastrarCliente";
import SidebarCollapse from "../../template/SidebarCollapse";
function CadastrarCliente() {
  return (
    <>
      <title>Cadastro de Funcionario</title>
      <AlternadorDeTema />
      <SelecionarTema />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SidebarCollapse />
          <MainCadastrarCliente />
        </div>
      </div>
    </>
  );
}
export default CadastrarCliente;
