import { Link } from "react-router";
function SidebarCollapse() {
    return (
        <>
            <div className="sidebar rr-sidebar border border-right col-md-3 col-lg-2 p-0">
                <div
                    className="offcanvas-md offcanvas-end"
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
                            <li >
                                <Link to='/'>
                                    <img src="/src/assets/img/sidebar/home.png" alt="" />
                                    HOME
                                </Link>
                            </li>
                            <li >
                                <Link to='/login'>
                                    <img src="/src/assets/img/sidebar/info.png" alt="" />
                                    INFORMAÇÕES
                                </Link>
                            </li>
                            <li className="menu-hover" >
                                <Link>
                                    <img src="/src/assets/img/sidebar/3-user.png" alt="" />
                                    CLIENTES
                                </Link>
                                <ul className="sub-menu ">
                                    <li >
                                        <Link to='/login'>
                                            <img src="/src/assets/img/sidebar/add-user.png" alt="" />

                                            CADASTRAR

                                        </Link>
                                    </li>
                                    <li >
                                        <Link>
                                            <img src="/src/assets/img/sidebar/listar.png" alt="" />

                                            LISTAR

                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-hover" >
                                <Link>
                                    <img src="/src/assets/img/sidebar/3-user.png" alt="" />
                                    FUNCIONÁRIO
                                </Link>
                                <ul className="sub-menu">
                                    <li >
                                        <Link to='/cadastro-funcionario'>
                                            <img src="/src/assets/img/sidebar/add-user.png" alt="" />

                                            CADASTRAR

                                        </Link>
                                    </li>
                                    <li >
                                        <Link to='/listar-funcionario'>
                                            <img src="/src/assets/img/sidebar/listar.png" alt="" />

                                            LISTAR

                                        </Link>
                                    </li>
                                </ul>



                            </li>
                            <li >
                                <Link>
                                    <img src="/src/assets/img/sidebar/time-circle.png" alt="" />

                                    HISTÓRICO DE VENDAS

                                </Link>
                            </li>
                            <li >
                                <Link>
                                    <img src="/src/assets/img/sidebar/bag.png" alt="" />
                                    PRODUTOS

                                </Link>
                            </li>
                            <li >
                                <Link>
                                    <img src="/src/assets/img/sidebar/logout.png" alt="" />

                                    SAIR

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