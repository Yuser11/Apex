import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import SidebarCollapse from "../../template/SidebarCollapse";
import MainEditarAluno from "./MainVendas";
import MainVendas from "./MainVendas";
function Vendas() {
    return (
        <>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainVendas />
                </div>
            </div>
        </>
    );
}
export default Vendas;