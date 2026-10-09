function ProfileSection({
    perfil,
    onChange,
    onFotoChange
}) {
    return (
        <section
            id="perfil"
            className="card shadow-sm border-0 mb-4"
        >
            <div className="card-header bg-white py-3">
                <h2 className="h5 mb-0">
                    <i className="bi bi-person me-2"></i>
                    Datos principales
                </h2>
            </div>

            <div className="card-body">

                <div className="row g-3">

                    <div className="col-12">
                        <label
                            htmlFor="fotoPerfil"
                            className="form-label"
                        >
                            Foto de perfil
                        </label>

                        <input
                            type="file"
                            id="fotoPerfil"
                            className="form-control"
                            accept="image/*"
                            onChange={onFotoChange}
                        />

                        <div className="form-text">
                            Selecciona una imagen para utilizarla
                            como fotografía principal.
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="nombre"
                            className="form-label"
                        >
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="form-control"
                            placeholder="Ej. Aron"
                            value={perfil.nombre}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="apellido"
                            className="form-label"
                        >
                            Apellido
                        </label>

                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            className="form-control"
                            placeholder="Ej. Pendolema"
                            value={perfil.apellido}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="profesion"
                            className="form-label"
                        >
                            Profesión o especialidad
                        </label>

                        <input
                            type="text"
                            id="profesion"
                            name="profesion"
                            className="form-control"
                            placeholder="Ej. Desarrollador de Software"
                            value={perfil.profesion}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="ubicacion"
                            className="form-label"
                        >
                            Ubicación
                        </label>

                        <input
                            type="text"
                            id="ubicacion"
                            name="ubicacion"
                            className="form-control"
                            placeholder="Ej. Guayaquil, Ecuador"
                            value={perfil.ubicacion}
                            onChange={onChange}
                        />
                    </div>

                    <div className="col-12">
                        <label
                            htmlFor="frasePresentacion"
                            className="form-label"
                        >
                            Frase de presentación
                        </label>

                        <input
                            type="text"
                            id="frasePresentacion"
                            name="frasePresentacion"
                            className="form-control"
                            maxLength="150"
                            placeholder="Una breve frase para la presentación principal"
                            value={perfil.frasePresentacion}
                            onChange={onChange}
                        />
                    </div>

                    <div className="col-md-6">
                        <label
                            htmlFor="disponibilidad"
                            className="form-label"
                        >
                            Disponibilidad
                        </label>

                        <select
                            id="disponibilidad"
                            name="disponibilidad"
                            className="form-select"
                            value={perfil.disponibilidad}
                            onChange={onChange}
                        >
                            <option value="disponible">
                                Disponible para proyectos
                            </option>

                            <option value="freelance">
                                Disponible para freelance
                            </option>

                            <option value="trabajo">
                                Buscando oportunidades laborales
                            </option>

                            <option value="no-disponible">
                                No disponible actualmente
                            </option>
                        </select>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProfileSection;