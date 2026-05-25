import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainListarFuncionario from "./MainListarFuncionario";
import SidebarCollapse from "../../template/SidebarCollapse";
function ListarFuncionario() {
  return (
    <>
      <AlternadorDeTema />
      <SelecionarTema />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SidebarCollapse />
          <MainListarFuncionario />
        </div>
      </div>
    </>
  );
}
export default ListarFuncionario;
