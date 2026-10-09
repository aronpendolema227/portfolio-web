import { useState } from "react";

function Navbar({
    nombre = "Portfolio",
    tema = "light",
    onCambiarTema
}) {
    const [menuOpen, setMenuOpen] = useState(false);
    

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="portfolio-header sticky-top">
            <nav
                className="navbar navbar-expand-lg"
                aria-label="Navegación principal"
            >
                <div className="container-fluid portfolio-nav-container">

                    {/* NOMBRE / LOGO */}
                    <a
                        className="navbar-brand fw-bold"
                        href="#inicio"
                        onClick={closeMenu}
                    >
                        {nombre}
                    </a>

                    {/* BOTÓN MENÚ MÓVIL */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarPortfolio"
                        aria-expanded={menuOpen}
                        aria-label="Abrir navegación"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i className="bi bi-list"></i>
                    </button>

                    {/* MENÚ */}
                    <div
                        id="navbarPortfolio"
                        className={`collapse navbar-collapse ${
                            menuOpen ? "show" : ""
                        }`}
                    >
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#inicio"
                                    onClick={closeMenu}
                                >
                                    Inicio
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#sobre-mi"
                                    onClick={closeMenu}
                                >
                                    Sobre mí
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#servicios"
                                    onClick={closeMenu}
                                >
                                    Servicios
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#proyectos"
                                    onClick={closeMenu}
                                >
                                    Proyectos
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#habilidades"
                                    onClick={closeMenu}
                                >
                                    Habilidades
                                </a>
                            </li>

                            

                            {/* CAMBIO DE TEMA */}
                            <li className="nav-item ms-lg-2">
                                <button
                                    type="button"
                                    className="btn btn-theme"
                                    aria-label="Cambiar tema"
                                    title="Cambiar tema"
                                    onClick={onCambiarTema}
                                >
                                    <i
                                        className={
                                            tema === "dark"
                                                ? "bi bi-sun"
                                                : "bi bi-moon"
                                        }
                                    ></i>
                                </button>
                            </li>

                            {/* CONTACTO */}
                            <li className="nav-item ms-lg-2">
                                <a
                                    className="btn btn-primary btn-contacto-nav"
                                    href="#contacto"
                                    onClick={closeMenu}
                                >
                                    Contáctame
                                    <i className="bi bi-arrow-right ms-1"></i>
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;