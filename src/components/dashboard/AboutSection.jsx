function AboutSection({
    sobreMi,
    onChange,
    telefonoError
}) {
    return (
        <section
            id="sobre-mi"
            className="card shadow-sm border-0 mb-4"
        >
            <div className="card-header bg-white py-3">
                <h2 className="h5 mb-0">
                    <i className="bi bi-person-vcard me-2"></i>
                    Sobre mí
                </h2>
            </div>

            <div className="card-body">

                <div className="row g-3">

                    <div className="col-12">
                        <label
                            htmlFor="descripcion"
                            className="form-label"
                        >
                            Descripción personal
                        </label>

                        <textarea
                            id="descripcion"
                            name="descripcion"
                            className="form-control"
                            rows="5"
                            placeholder="Escribe una descripción sobre ti, tus intereses y experiencia..."
                            value={sobreMi.descripcion}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="correo"
                            className="form-label"
                        >
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            className="form-control"
                            placeholder="correo@ejemplo.com"
                            value={sobreMi.correo}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="telefono"
                            className="form-label"
                        >
                            Teléfono
                        </label>

                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            className={`form-control ${
                                telefonoError
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="0999999999"
                            value={sobreMi.telefono}
                            onChange={onChange}
                            required
                        />

                        {telefonoError && (
                            <div className="invalid-feedback">
                                {telefonoError}
                            </div>
                        )}
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="idiomas"
                            className="form-label"
                        >
                            Idiomas
                        </label>

                        <input
                            type="text"
                            id="idiomas"
                            name="idiomas"
                            className="form-control"
                            placeholder="Ej. Español, Inglés"
                            value={sobreMi.idiomas}
                            onChange={onChange}
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="cv"
                            className="form-label"
                        >
                            Enlace al CV
                        </label>

                        <input
                            type="url"
                            id="cv"
                            name="cv"
                            className="form-control"
                            placeholder="https://..."
                            value={sobreMi.cv}
                            onChange={onChange}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;