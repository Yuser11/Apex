import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import SidebarCollapse from "../../template/SidebarCollapse";
import MainEditarCliente from "./MainEditarCliente";
function EditarCliente() {
  return (
    <>
      <AlternadorDeTema />
      <SelecionarTema />
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SidebarCollapse />
          <MainEditarCliente />
        </div>
      </div>
    </>
  );
}
export default EditarCliente;
