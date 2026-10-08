import { useState } from "react";

function Skills({
    habilidades = [
        {
            id: 1,
            nombre: "HTML",
            nivel: "Intermedio",
            categoria: "frontend",
            icono: "bi bi-filetype-html"
        },
        {
            id: 2,
            nombre: "CSS",
            nivel: "Intermedio",
            categoria: "frontend",
            icono: "bi bi-filetype-css"
        },
        {
            id: 3,
            nombre: "JavaScript",
            nivel: "Intermedio",
            categoria: "frontend",
            icono: "bi bi-filetype-js"
        },
        {
            id: 4,
            nombre: "Java",
            nivel: "Intermedio",
            categoria: "backend",
            icono: "bi bi-cup-hot"
        },
        {
            id: 5,
            nombre: "PostgreSQL",
            nivel: "Intermedio",
            categoria: "database",
            icono: "bi bi-database"
        },
        {
            id: 6,
            nombre: "GitHub",
            nivel: "Intermedio",
            categoria: "herramienta",
            icono: "bi bi-github"
        }
    ]
}) {
    const [filtroActivo, setFiltroActivo] = useState("todos");

    const filtros = [
        {
            id: "todos",
            texto: "Todos"
        },
        {
            id: "frontend",
            texto: "Front-end"
        },
        {
            id: "backend",
            texto: "Back-end"
        },
        {
            id: "database",
            texto: "Base de datos"
        },
        {
            id: "herramienta",
            texto: "Herramientas"
        }
    ];

    const habilidadesFiltradas =
        filtroActivo === "todos"
            ? habilidades
            : habilidades.filter(
                  (habilidad) =>
                      habilidad.categoria === filtroActivo
              );

    return (
        <section
            id="habilidades"
            className="section-padding skills-section"
        >
            <div className="container">

                {/* ENCABEZADO */}
                <div className="section-heading text-center">
                    <span className="section-label">
                        Habilidades
                    </span>

                    <h2>
                        Tecnologías y herramientas
                    </h2>
                </div>

                {/* FILTROS */}
                <div className="skills-filters d-flex flex-wrap justify-content-center gap-2 mb-4">

                    {filtros.map((filtro) => (
                        <button
                            key={filtro.id}
                            type="button"
                            className={`btn btn-skill-filter ${
                                filtroActivo === filtro.id
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setFiltroActivo(filtro.id)
                            }
                        >
                            {filtro.texto}
                        </button>
                    ))}

                </div>

                {/* HABILIDADES */}
                <div className="row g-3">

                    {habilidadesFiltradas.map((habilidad) => (
                        <article
                            key={habilidad.id}
                            className="col-6 col-md-4 col-lg-3"
                        >
                            <div className="skill-card h-100">

                                <div className="skill-icon">
                                    <i className={habilidad.icono}></i>
                                </div>

                                <h3>
                                    {habilidad.nombre}
                                </h3>

                                <span className="skill-level">
                                    {habilidad.nivel}
                                </span>

                            </div>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;