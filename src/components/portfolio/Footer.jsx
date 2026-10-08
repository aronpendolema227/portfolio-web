function Footer({
    nombre = "Portfolio",
    profesion = "Tu profesión",
    github = "",
    linkedin = "",
    instagram = "",
    web = ""
}) {
    const anioActual = new Date().getFullYear();

    return (
        <footer className="portfolio-footer">

            <div className="container">

                <div className="row align-items-center g-3">

                    {/* NOMBRE */}
                    <div className="col-md-4">

                        <strong>
                            {nombre}
                        </strong>

                        <p className="mb-0">
                            {profesion}
                        </p>

                    </div>

                    {/* REDES */}
                    <div className="col-md-4 text-md-center">

                        <div className="footer-socials d-flex justify-content-md-center gap-3">

                            {github && (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <i className="bi bi-github"></i>
                                </a>
                            )}

                            {linkedin && (
                                <a
                                    href={linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            )}

                            {instagram && (
                                <a
                                    href={instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                            )}

                            {web && (
                                <a
                                    href={web}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Sitio web"
                                >
                                    <i className="bi bi-globe"></i>
                                </a>
                            )}

                        </div>

                    </div>

                    {/* COPYRIGHT */}
                    <div className="col-md-4 text-md-end">

                        <small>
                            © {anioActual} {nombre}. Todos los derechos reservados.
                        </small>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;