import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import SidebarCollapse from "../../template/SidebarCollapse";
import MainEditarFuncionario from "./MainEditarFuncionario";
function EditarFuncionario() {
  return (
    <>
      <AlternadorDeTema />
      <SelecionarTema />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SidebarCollapse />
          <MainEditarFuncionario />
        </div>
      </div>
    </>
  );
}
export default EditarFuncionario;
