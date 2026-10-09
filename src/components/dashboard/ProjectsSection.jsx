function ProjectsSection({
    proyectos,
    onChange,
    onImagenChange,
    onAgregar,
    onEliminar
}) {
    return (
        <section
            id="proyectos"
            className="card shadow-sm border-0 mb-4"
        >
            <div className="card-header bg-white py-3">

                <div className="d-flex justify-content-between align-items-center">

                    <h2 className="h5 mb-0">
                        <i className="bi bi-folder me-2"></i>
                        Proyectos
                    </h2>

                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        onClick={onAgregar}
                    >
                        <i className="bi bi-plus-lg me-1"></i>
                        Agregar proyecto
                    </button>

                </div>

            </div>


            <div className="card-body">

                <div className="row g-3">

                    {proyectos.map((proyecto) => (

                        <article
                            key={proyecto.id}
                            className="col-lg-6"
                        >
                            <div className="border rounded p-3 h-100">

                                <div className="d-flex justify-content-between align-items-center mb-3">

                                    <h3 className="h6 mb-0">
                                        Proyecto
                                    </h3>

                                    <button
                                        type="button"
                                        className="btn btn-outline-danger btn-sm"
                                        title="Eliminar proyecto"
                                        onClick={() =>
                                            onEliminar(proyecto.id)
                                        }
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>

                                </div>


                                {/* NOMBRE */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Nombre del proyecto
                                    </label>

                                    <input
                                        type="text"
                                        name="nombre"
                                        className="form-control"
                                        placeholder="Nombre del proyecto"
                                        value={proyecto.nombre}
                                        onChange={(event) =>
                                            onChange(
                                                proyecto.id,
                                                event
                                            )
                                        }
                                    />

                                </div>


                                {/* DESCRIPCIÓN */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Descripción
                                    </label>

                                    <textarea
                                        name="descripcion"
                                        className="form-control"
                                        rows="3"
                                        placeholder="Descripción del proyecto..."
                                        value={proyecto.descripcion}
                                        onChange={(event) =>
                                            onChange(
                                                proyecto.id,
                                                event
                                            )
                                        }
                                    />

                                </div>


                                {/* TECNOLOGÍAS */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Tecnologías utilizadas
                                    </label>

                                    <input
                                        type="text"
                                        name="tecnologias"
                                        className="form-control"
                                        placeholder="Ej. React, Java, PostgreSQL"
                                        value={proyecto.tecnologias}
                                        onChange={(event) =>
                                            onChange(
                                                proyecto.id,
                                                event
                                            )
                                        }
                                    />

                                </div>


                                {/* IMAGEN */}
                                <div className="mb-3">

                                    <label className="form-label">
                                        Imagen del proyecto
                                    </label>

                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={(event) =>
                                            onImagenChange(
                                                proyecto.id,
                                                event
                                            )
                                        }
                                    />

                                </div>


                                {/* VISTA PREVIA */}
                                {proyecto.imagen && (
                                    <div className="mb-3">

                                        <label className="form-label">
                                            Vista previa
                                        </label>

                                        <div>
                                            <img
                                                src={proyecto.imagen}
                                                alt={`Vista previa de ${proyecto.nombre || "proyecto"}`}
                                                className="img-fluid rounded border"
                                                style={{
                                                    maxHeight: "180px",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </div>

                                    </div>
                                )}


                                {/* ENLACE */}
                                <div>

                                    <label className="form-label">
                                        Enlace del proyecto
                                    </label>

                                    <input
                                        type="url"
                                        name="url"
                                        className="form-control"
                                        placeholder="https://..."
                                        value={proyecto.url}
                                        onChange={(event) =>
                                            onChange(
                                                proyecto.id,
                                                event
                                            )
                                        }
                                    />

                                </div>

                            </div>
                        </article>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default ProjectsSection;