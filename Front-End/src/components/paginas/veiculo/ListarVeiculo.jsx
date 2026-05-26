import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainListarVeiculo from "./MainListarVeiculo";
import SidebarCollapse from "../../template/SidebarCollapse";
function ListarVeiculo() {
  return (
    <>
      <AlternadorDeTema />
      <SelecionarTema />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SidebarCollapse />
          <MainListarVeiculo />
        </div>
      </div>
    </>
  );
}
export default ListarVeiculo;
