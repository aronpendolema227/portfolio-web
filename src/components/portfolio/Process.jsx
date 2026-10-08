function Process({
    pasos = [
        {
            id: 1,
            numero: "01",
            titulo: "Analizar",
            descripcion:
                "Identificar las necesidades, objetivos y requisitos del proyecto antes de comenzar el desarrollo.",
            icono: "bi bi-search"
        },
        {
            id: 2,
            numero: "02",
            titulo: "Planificar",
            descripcion:
                "Definir la estructura, tecnologías, funcionalidades y tareas necesarias para desarrollar la solución.",
            icono: "bi bi-calendar-check"
        },
        {
            id: 3,
            numero: "03",
            titulo: "Diseñar",
            descripcion:
                "Crear la estructura visual y funcional de la aplicación buscando una experiencia clara e intuitiva.",
            icono: "bi bi-pencil-square"
        },
        {
            id: 4,
            numero: "04",
            titulo: "Desarrollar",
            descripcion:
                "Implementar las funcionalidades utilizando las tecnologías seleccionadas y realizar pruebas durante el proceso.",
            icono: "bi bi-code-slash"
        },
        {
            id: 5,
            numero: "05",
            titulo: "Entregar",
            descripcion:
                "Verificar el funcionamiento final, corregir detalles y preparar la solución para su implementación o entrega.",
            icono: "bi bi-send"
        }
    ]
}) {
    return (
        <section
            id="proceso"
            className="section-padding process-section"
        >
            <div className="container">

                {/* ENCABEZADO */}
                <div className="section-heading text-center">

                    <span className="section-label">
                        Mi proceso
                    </span>

                    <h2>
                        Cómo desarrollo cada proyecto
                    </h2>

                </div>

                {/* PASOS */}
                <div className="row g-4">

                    {pasos.map((paso) => (
                        <article
                            key={paso.id}
                            className="col-md-6 col-xl process-step"
                        >
                            <span className="process-number">
                                {paso.numero}
                            </span>

                            <i className={paso.icono}></i>

                            <h3>
                                {paso.titulo}
                            </h3>

                            <p>
                                {paso.descripcion}
                            </p>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Process;