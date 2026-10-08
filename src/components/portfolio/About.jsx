function About({
    descripcion = "Tu descripción personal aparecerá aquí.",
    ubicacion = "Tu ubicación",
    correo = "correo@ejemplo.com",
    telefono = "0999999999",
    idiomas = "Tus idiomas"
}) {
    return (
        <section
            id="sobre-mi"
            className="section-padding about-section"
        >
            <div className="container">

                {/* TÍTULO */}
                <div className="section-heading">
                    <span className="section-label">
                        Sobre mí
                    </span>

                    <h2>
                        Conoce un poco más sobre mí
                    </h2>
                </div>

                <div className="row g-4 align-items-stretch">

                    {/* DESCRIPCIÓN */}
                    <article className="col-lg-7">
                        <div className="about-card h-100">

                            <h3>
                                Construyendo soluciones con tecnología
                            </h3>

                            <p>
                                {descripcion}
                            </p>

                        </div>
                    </article>

                    {/* INFORMACIÓN */}
                    <aside className="col-lg-5">
                        <div className="contact-info-card h-100">

                            <div className="info-item">
                                <i className="bi bi-geo-alt"></i>

                                <div>
                                    <span>Ubicación</span>
                                    <strong>{ubicacion}</strong>
                                </div>
                            </div>

                            <div className="info-item">
                                <i className="bi bi-envelope"></i>

                                <div>
                                    <span>Correo</span>
                                    <strong>{correo}</strong>
                                </div>
                            </div>

                            <div className="info-item">
                                <i className="bi bi-telephone"></i>

                                <div>
                                    <span>Teléfono</span>
                                    <strong>{telefono}</strong>
                                </div>
                            </div>

                            <div className="info-item">
                                <i className="bi bi-translate"></i>

                                <div>
                                    <span>Idiomas</span>
                                    <strong>{idiomas}</strong>
                                </div>
                            </div>

                        </div>
                    </aside>

                </div>

            </div>
        </section>
    );
}

export default About;