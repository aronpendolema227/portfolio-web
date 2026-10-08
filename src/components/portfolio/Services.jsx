function Services({
    servicios = [
        {
            id: 1,
            nombre: "Desarrollo Web",
            descripcion: "Creación de aplicaciones y sitios web modernos y responsivos.",
            icono: "bi bi-code-slash"
        },
        {
            id: 2,
            nombre: "Bases de Datos",
            descripcion: "Diseño y gestión de bases de datos para aplicaciones.",
            icono: "bi bi-database"
        }
    ]
}) {
    return (
        <section
            id="servicios"
            className="section-padding services-section"
        >
            <div className="container">

                <div className="section-heading text-center">
                    <span className="section-label">
                        Servicios
                    </span>

                    <h2>
                        Lo que puedo hacer
                    </h2>

                    <p>
                        Soluciones enfocadas en tecnología,
                        desarrollo y experiencia digital.
                    </p>
                </div>

                <div className="row g-4">

                    {servicios.map((servicio) => (
                        <article
                            key={servicio.id}
                            className="col-md-6 col-xl-4"
                        >
                            <div className="service-card h-100">

                                <div className="service-icon">
                                    <i className={servicio.icono}></i>
                                </div>

                                <h3>
                                    {servicio.nombre}
                                </h3>

                                <p>
                                    {servicio.descripcion}
                                </p>

                            </div>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Services;