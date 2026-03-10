function SelecionarTema() {
    return (
        <>
            <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                <button
                    className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                    id="bd-theme"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    aria-label="Toggle theme (auto)"
                >
                    <i className="bi bi-circle-half my-1 theme-icon-active" aria-hidden="true"></i>
                    <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                    <li>
                        <button
                            type="button"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-theme-value="light"
                            aria-pressed="false"
                        >
                            <i className="bi bi-sun-fill me-2 opacity-50" aria-hidden="true"></i>
                            Light
                            <i className="bi bi-check2 ms-auto d-none" aria-hidden="true"></i>
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="dropdown-item d-flex align-items-center"
                            data-bs-theme-value="dark"
                            aria-pressed="false"
                        >
                            <i className="bi bi-moon-stars-fill me-2 opacity-50" aria-hidden="true"></i>
                            Dark
                            <i className="bi bi-check2 ms-auto d-none" aria-hidden="true"></i>
                        </button>
                    </li>

                    <li>
                        <button
                            type="button"
                            className="dropdown-item d-flex align-items-center active"
                            data-bs-theme-value="auto"
                            aria-pressed="true"
                        >
                            <i className="bi bi-circle-half me-2 opacity-50" aria-hidden="true"></i>
                            Auto
                            <i className="bi bi-check2 ms-auto d-none" aria-hidden="true"></i>
                        </button>
                    </li>
                </ul>
            </div>

        </>
    );
}
export default SelecionarTema;