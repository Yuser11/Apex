import Navbar from "../template/Navbar";
import AlternadorDeTema from "../AlternadorDeTema";
import SelecionarTema from "../SelecionarTema";
import MainHome from "./MainHome";
import SidebarCollapse from "../template/SidebarCollapse";

function CadastrarAluno() {
    return (
        <>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainHome />
                </div>
            </div>


        </>
    );
}
export default CadastrarAluno;