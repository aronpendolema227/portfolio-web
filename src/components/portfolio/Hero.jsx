function Hero({
    nombre = "Tu nombre",
    profesion = "Tu profesión",
    frase = "Tu presentación aparecerá aquí.",
    ubicacion = "Tu ubicación",
    disponibilidad = "Disponible para proyectos",
    foto = "",
    github = "",
    linkedin = "",
    instagram = "",
    cv = ""
}) {
    return (
        <section
            className="hero-section"
            aria-labelledby="heroNombre"
        >
            <div className="container">

                <div className="row align-items-center min-vh-75 g-5">

                    {/* INFORMACIÓN */}
                    <div className="col-lg-6 order-2 order-lg-1">

                        <p className="hero-intro mb-2">
                            Hola, soy
                        </p>

                        <h1
                            className="hero-title"
                            id="heroNombre"
                        >
                            {nombre}
                        </h1>

                        <h2 className="hero-profesion">
                            {profesion}
                        </h2>

                        <p className="hero-descripcion mt-4">
                            {frase}
                        </p>

                        {/* UBICACIÓN Y DISPONIBILIDAD */}
                        <div className="hero-meta d-flex flex-wrap gap-3 mt-4">

                            <span>
                                <i className="bi bi-geo-alt me-1"></i>
                                {ubicacion}
                            </span>

                            <span>
                                <i className="bi bi-briefcase me-1"></i>
                                {disponibilidad}
                            </span>

                        </div>

                        {/* BOTONES */}
                        <div className="hero-actions d-flex flex-wrap gap-3 mt-4">

                            <a
                                href="#proyectos"
                                className="btn btn-primary"
                            >
                                Ver proyectos
                                <i className="bi bi-arrow-right ms-1"></i>
                            </a>

                            <a
                                href="#contacto"
                                className="btn btn-outline-primary"
                            >
                                <i className="bi bi-envelope me-1"></i>
                                Contáctame
                            </a>

                            {cv && (
                                <a
                                    href={cv}
                                    className="btn btn-outline-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-download me-1"></i>
                                    Ver CV
                                </a>
                            )}

                        </div>

                        {/* REDES */}
                        <div className="hero-socials d-flex gap-3 mt-4">

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

                        </div>

                    </div>

                    {/* FOTO */}
                    <div className="col-lg-6 order-1 order-lg-2 text-center">

                        <div className="hero-image-wrapper">

                            {foto && (
                                <img
                                    src={foto}
                                    alt={`Foto de ${nombre}`}
                                    className="hero-image img-fluid"
                                />
                            )}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;