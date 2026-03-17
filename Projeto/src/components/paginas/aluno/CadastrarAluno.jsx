import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainCadastrarAluno from "./MainCadastrarAluno";
import SidebarCollapse from "../../template/SidebarCollapse";
function CadastrarAluno() {
    return (
        <>  
             <title>Cadastro de aluno</title>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <SidebarCollapse />
                    <MainCadastrarAluno />
                </div>
            </div>

        </>
    );
}
export default CadastrarAluno;