import Navbar from "../../template/Navbar";
import AlternadorDeTema from "../../AlternadorDeTema";
import SelecionarTema from "../../SelecionarTema";
import SidebarCollapse from "../../template/SidebarCollapse";
import MainErro404 from "./MainErro404";

function erro404() {
    return (
        <>
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
export default erro404;