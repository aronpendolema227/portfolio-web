function ServicesSection({
    servicios,
    onChange,
    onAgregar,
    onEliminar
}) {
    return (
        <section
            id="servicios"
            className="card shadow-sm border-0 mb-4"
        >
            <div className="card-header bg-white py-3">

                <div className="d-flex justify-content-between align-items-center">

                    <h2 className="h5 mb-0">
                        <i className="bi bi-briefcase me-2"></i>
                        Servicios
                    </h2>

                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={onAgregar}
                    >
                        <i className="bi bi-plus-lg me-1"></i>
                        Agregar servicio
                    </button>

                </div>

            </div>


            <div className="card-body">

                <div className="row g-3">

                    {servicios.map((servicio) => (

                        <article
                            key={servicio.id}
                            className="col-lg-6"
                        >
                            <div className="border rounded p-3 h-100">

                                <div className="d-flex justify-content-between align-items-center mb-3">

                                    <h3 className="h6 mb-0">
                                        Servicio
                                    </h3>

                                    <button
                                        type="button"
                                        className="btn btn-outline-danger btn-sm"
                                        title="Eliminar servicio"
                                        onClick={() =>
                                            onEliminar(servicio.id)
                                        }
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>

                                </div>


                                <div className="mb-3">

                                    <label className="form-label">
                                        Nombre del servicio
                                    </label>

                                    <input
                                        type="text"
                                        name="titulo"
                                        className="form-control"
                                        placeholder="Ej. Desarrollo Web"
                                        value={servicio.titulo}
                                        onChange={(event) =>
                                            onChange(
                                                servicio.id,
                                                event
                                            )
                                        }
                                    />

                                </div>


                                <div className="mb-3">

                                    <label className="form-label">
                                        Descripción
                                    </label>

                                    <textarea
                                        name="descripcion"
                                        className="form-control"
                                        rows="3"
                                        placeholder="Describe el servicio..."
                                        value={servicio.descripcion}
                                        onChange={(event) =>
                                            onChange(
                                                servicio.id,
                                                event
                                            )
                                        }
                                    />

                                </div>


                                <div>

                                    <label className="form-label">
                                        Icono
                                    </label>

                                    <select
                                        name="icono"
                                        className="form-select"
                                        value={servicio.icono}
                                        onChange={(event) =>
                                            onChange(
                                                servicio.id,
                                                event
                                            )
                                        }
                                    >
                                        <option value="bi-code-slash">
                                            Código
                                        </option>

                                        <option value="bi-display">
                                            Diseño web
                                        </option>

                                        <option value="bi-phone">
                                            Responsive
                                        </option>

                                        <option value="bi-database">
                                            Base de datos
                                        </option>

                                        <option value="bi-tools">
                                            Mantenimiento
                                        </option>

                                        <option value="bi-speedometer2">
                                            Optimización
                                        </option>
                                    </select>

                                </div>

                            </div>
                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default ServicesSection;