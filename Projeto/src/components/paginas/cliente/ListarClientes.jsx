import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainListarCliente from "./MainListarCliente";
import SidebarCollapse from "../../template/SidebarCollapse";
function ListarCliente() {
    return (
        <>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainListarCliente />
                </div>
            </div>

        </>
    );
}
export default ListarCliente;