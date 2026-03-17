import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import SidebarCollapse from "../../template/SidebarCollapse";
import MainEditarAluno from "./MainEditarAluno";
function EditarAluno() {
    return (
        <>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainEditarAluno />
                </div>
            </div>
        </>
    );
}
export default EditarAluno;