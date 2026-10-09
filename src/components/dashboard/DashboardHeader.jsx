function DashboardHeader({
    onAbrirSidebar
}) {
    return (
        <header className="navbar navbar-dark bg-dark sticky-top shadow-sm">

            <div className="container-fluid">

                <div className="d-flex align-items-center gap-2">

                    <button
                        type="button"
                        className="btn btn-outline-light btn-sm d-md-none"
                        aria-label="Abrir menú lateral"
                        onClick={onAbrirSidebar}
                    >
                        <i className="bi bi-list"></i>
                    </button>

                    <a
                        className="navbar-brand fw-bold mb-0"
                        href="#perfil"
                    >
                        <i className="bi bi-grid-1x2-fill me-2"></i>

                        Portfolio Admin
                    </a>

                </div>

                <div className="d-flex align-items-center gap-2">

                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light btn-sm"
                    >
                        <i className="bi bi-box-arrow-up-right me-1"></i>

                        Ver portafolio
                    </a>

                </div>

            </div>

        </header>
    );
}

export default DashboardHeader;