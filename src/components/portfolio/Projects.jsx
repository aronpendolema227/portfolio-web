function Projects({
    proyectos = [
        {
            id: 1,
            nombre: "Proyecto de ejemplo",
            descripcion:
                "Aquí se mostrará la descripción del proyecto configurado desde el dashboard.",
            tecnologias: [
                "React",
                "JavaScript",
                "CSS"
            ],
            imagen: "",
            enlace: ""
        }
    ]
}) {
    return (
        <section
            id="proyectos"
            className="section-padding projects-section"
        >
            <div className="container">

                {/* ENCABEZADO */}
                <div className="section-heading d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3">

                    <div>
                        <span className="section-label">
                            Proyectos
                        </span>

                        <h2>
                            Proyectos destacados
                        </h2>
                    </div>

                </div>

                {/* PROYECTOS */}
                <div className="row g-4">

                    {proyectos.map((proyecto) => (
                        <article
                            key={proyecto.id}
                            className="col-md-6 col-xl-4"
                        >
                            <div className="project-card h-100">

                                {/* IMAGEN */}
                                <div className="project-image-wrapper">

                                    {proyecto.imagen ? (
                                        <img
                                            src={proyecto.imagen}
                                            alt={`Vista previa de ${proyecto.nombre}`}
                                            className="project-image"
                                        />
                                    ) : (
                                        <div className="project-image project-image-placeholder d-flex align-items-center justify-content-center">
                                            <i className="bi bi-image fs-1"></i>
                                        </div>
                                    )}

                                </div>

                                {/* CONTENIDO */}
                                <div className="project-content">

                                    <h3>
                                        {proyecto.nombre}
                                    </h3>

                                    <p className="project-description">
                                        {proyecto.descripcion}
                                    </p>

                                    {proyecto.tecnologias?.length > 0 && (
                                        <div className="project-technologies">
                                            {proyecto.tecnologias.join(" · ")}
                                        </div>
                                    )}

                                    {proyecto.enlace && (
                                        <a
                                            href={proyecto.enlace}
                                            className="project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Ver proyecto

                                            <i className="bi bi-arrow-up-right"></i>
                                        </a>
                                    )}

                                </div>

                            </div>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;