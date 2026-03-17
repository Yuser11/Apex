import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainListarAluno from "./MainListarAluno";
import SidebarCollapse from "../../template/SidebarCollapse";
function ListarAluno() {
    return (
        <>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainListarAluno />
                </div>
            </div>

        </>
    );
}
export default ListarAluno;