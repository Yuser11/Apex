import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import SidebarCollapse from "../../template/SidebarCollapse";
import MainEditarVeiculo from "./MainEditarVeiculo";
function EditarVeiculo() {
  return (
    <>
      <AlternadorDeTema />
      <SelecionarTema />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SidebarCollapse />
          <MainEditarVeiculo />
        </div>
      </div>
    </>
  );
}
export default EditarVeiculo;
