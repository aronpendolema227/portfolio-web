function StatsSection({
    estadisticas,
    onChange
}) {
    return (
        <section
            id="estadisticas"
            className="card shadow-sm border-0 mb-4"
        >
            <div className="card-header bg-white py-3">
                <h2 className="h5 mb-0">
                    <i className="bi bi-bar-chart me-2"></i>
                    Estadísticas
                </h2>
            </div>

            <div className="card-body">
                <div className="row g-3">

                    <div className="col-md-6 col-xl-3">
                        <label
                            htmlFor="aniosExperiencia"
                            className="form-label"
                        >
                            Años de experiencia
                        </label>

                        <input
                            type="number"
                            min="0"
                            id="aniosExperiencia"
                            name="aniosExperiencia"
                            className="form-control"
                            value={estadisticas.aniosExperiencia}
                            onChange={onChange}
                        />
                    </div>

                    <div className="col-md-6 col-xl-3">
                        <label
                            htmlFor="proyectosCompletados"
                            className="form-label"
                        >
                            Proyectos realizados
                        </label>

                        <input
                            type="number"
                            min="0"
                            id="proyectosCompletados"
                            name="proyectosCompletados"
                            className="form-control"
                            value={estadisticas.proyectosCompletados}
                            onChange={onChange}
                        />
                    </div>

                    <div className="col-md-6 col-xl-3">
                        <label
                            htmlFor="tecnologiasDominadas"
                            className="form-label"
                        >
                            Tecnologías
                        </label>

                        <input
                            type="number"
                            min="0"
                            id="tecnologiasDominadas"
                            name="tecnologiasDominadas"
                            className="form-control"
                            value={estadisticas.tecnologiasDominadas}
                            onChange={onChange}
                        />
                    </div>

                    <div className="col-md-6 col-xl-3">
                        <label
                            htmlFor="logros"
                            className="form-label"
                        >
                            Logros y certificaciones
                        </label>

                        <input
                            type="number"
                            min="0"
                            id="logros"
                            name="logros"
                            className="form-control"
                            value={estadisticas.logros}
                            onChange={onChange}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default StatsSection;