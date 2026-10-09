function SettingsSection({
    configuracion,
    onChange
}) {
    return (
        <section
            id="configuracion"
            className="card shadow-sm border-0 mb-4"
        >
            <div className="card-header bg-white py-3">

                <h2 className="h5 mb-0">
                    <i className="bi bi-gear me-2"></i>
                    Configuración
                </h2>

            </div>


            <div className="card-body">

                <div className="row g-3">

                    {/* TEMA INICIAL */}
                    <div className="col-md-6">

                        <label
                            htmlFor="temaInicial"
                            className="form-label"
                        >
                            Tema inicial
                        </label>

                        <select
                            id="temaInicial"
                            name="temaInicial"
                            className="form-select"
                            value={configuracion.temaInicial}
                            onChange={onChange}
                        >
                            <option value="light">
                                Modo claro
                            </option>

                            <option value="dark">
                                Modo oscuro
                            </option>
                        </select>

                    </div>


                    {/* COLOR PRINCIPAL */}
                    <div className="col-md-6">

                        <label
                            htmlFor="colorPrincipal"
                            className="form-label"
                        >
                            Color principal
                        </label>

                        <input
                            type="color"
                            id="colorPrincipal"
                            name="colorPrincipal"
                            className="form-control form-control-color"
                            value={configuracion.colorPrincipal}
                            onChange={onChange}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default SettingsSection;