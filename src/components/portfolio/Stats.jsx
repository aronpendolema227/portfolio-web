function Stats({
    experiencia = 0,
    proyectos = 0,
    tecnologias = 0,
    logros = 0
}) {
    const estadisticas = [
        {
            id: "experiencia",
            icono: "bi bi-calendar-check",
            valor: experiencia,
            texto: "Años de experiencia"
        },
        {
            id: "proyectos",
            icono: "bi bi-folder-check",
            valor: proyectos,
            texto: "Proyectos realizados"
        },
        {
            id: "tecnologias",
            icono: "bi bi-code-square",
            valor: tecnologias,
            texto: "Tecnologías"
        },
        {
            id: "logros",
            icono: "bi bi-award",
            valor: logros,
            texto: "Logros y certificaciones"
        }
    ];

    return (
        <section
            className="stats-section"
            aria-label="Estadísticas profesionales"
        >
            <div className="container">

                <div className="stats-container row g-0">

                    {estadisticas.map((estadistica) => (
                        <article
                            key={estadistica.id}
                            className="col-6 col-lg-3 stat-item"
                        >
                            <div className="stat-icon">
                                <i className={estadistica.icono}></i>
                            </div>

                            <h3>
                                {estadistica.valor}
                            </h3>

                            <p>
                                {estadistica.texto}
                            </p>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Stats;