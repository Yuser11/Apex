import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainHome from "./MainHome";
import SidebarCollapse from "../../template/SidebarCollapse"; 

function Home() {
    return (
        <>
            <title>Home</title>
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
export default Home;