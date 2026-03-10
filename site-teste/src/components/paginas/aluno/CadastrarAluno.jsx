
import Navbar from "../../template/Navbar";
import AlternadorDeTema from "../../AlternadorDeTema";
import SelecionarTema from "../../SelecionarTema";
import SidebarCollapse from "../../template/SidebarCollapse";
import MainCadastrarAluno from "./MainCadastrarAluno";

function CadastrarAluno() {
    return (
        <>
            <title>Cadastro de Alunos</title>

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