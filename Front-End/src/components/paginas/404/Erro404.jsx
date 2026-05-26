import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainErro404 from "./MainErro404";
import SidebarCollapse from "../../template/SidebarCollapse";
function Erro404() {
    return (
        <>  
            <title>Página não encontrada</title>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainErro404 />
                </div>
            </div>

        </>
    );
}
export default Erro404;