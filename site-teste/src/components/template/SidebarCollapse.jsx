import { Link } from "react-router";

function SidebarCollapse() {
    return (
        <>
            <div className="sidebar rr-sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                <div
                    className="offcanvas-md offcanvas-end bg-body-tertiary"
                    tabIndex="-1"
                    id="sidebarMenu"
                    aria-labelledby="sidebarMenuLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="sidebarMenuLabel">
                            SESI SENAI
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                        <ul className="nav flex-column">
                            <li className="mb-1">
                                <button
                                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#dashboard-collapse"
                                    aria-expanded="false"
                                >
                                    Aluno
                                </button>
                                <div className="collapse" id="dashboard-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li>
                                            <Link
                                                to="/cadastro-aluno"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                                    Cadastrar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                                    Listar
                                            </Link                                            >
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                            </li>

                        </ul>

                        <hr className="my-3" />

                        <ul className="nav flex-column mb-auto">
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center gap-2" href="#">
                                    <i className="bi bi-gear-wide-connected" aria-hidden="true"></i>
                                    Settings
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center gap-2" href="#">
                                    <i className="bi bi-door-closed" aria-hidden="true"></i>
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
}
export default SidebarCollapse;