function SkillsSection({
    habilidades,
    onChange,
    onAgregar,
    onEliminar
}) {
    return (
        <section
            id="habilidades"
            className="card shadow-sm border-0 mb-4"
        >
            <div className="card-header bg-white py-3">

                <div className="d-flex justify-content-between align-items-center">

                    <h2 className="h5 mb-0">
                        <i className="bi bi-code-slash me-2"></i>
                        Habilidades y herramientas
                    </h2>

                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={onAgregar}
                    >
                        <i className="bi bi-plus-lg me-1"></i>
                        Agregar habilidad
                    </button>

                </div>

            </div>


            <div className="card-body">

                {habilidades.map((habilidad) => (

                    <div
                        key={habilidad.id}
                        className="row g-3 align-items-end mb-3"
                    >

                        {/* TECNOLOGÍA */}
                        <div className="col-md-4">

                            <label className="form-label">
                                Tecnología
                            </label>

                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                placeholder="Ej. JavaScript"
                                value={habilidad.nombre}
                                onChange={(event) =>
                                    onChange(
                                        habilidad.id,
                                        event
                                    )
                                }
                            />

                        </div>


                        {/* NIVEL */}
                        <div className="col-md-3">

                            <label className="form-label">
                                Nivel
                            </label>

                            <select
                                name="nivel"
                                className="form-select"
                                value={habilidad.nivel}
                                onChange={(event) =>
                                    onChange(
                                        habilidad.id,
                                        event
                                    )
                                }
                            >
                                <option value="basico">
                                    Básico
                                </option>

                                <option value="intermedio">
                                    Intermedio
                                </option>

                                <option value="avanzado">
                                    Avanzado
                                </option>
                            </select>

                        </div>


                        {/* CATEGORÍA */}
                        <div className="col-md-3">

                            <label className="form-label">
                                Categoría
                            </label>

                            <select
                                name="categoria"
                                className="form-select"
                                value={habilidad.categoria}
                                onChange={(event) =>
                                    onChange(
                                        habilidad.id,
                                        event
                                    )
                                }
                            >
                                <option value="frontend">
                                    Front-end
                                </option>

                                <option value="backend">
                                    Back-end
                                </option>

                                <option value="database">
                                    Base de datos
                                </option>

                                <option value="herramienta">
                                    Herramienta
                                </option>
                            </select>

                        </div>


                        {/* ELIMINAR */}
                        <div className="col-md-2">

                            <button
                                type="button"
                                className="btn btn-outline-danger w-100"
                                title="Eliminar habilidad"
                                onClick={() =>
                                    onEliminar(habilidad.id)
                                }
                            >
                                <i className="bi bi-trash"></i>
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default SkillsSection;