function ProcessSection({
    proceso,
    onChange
}) {
    return (
        <section
            id="proceso"
            className="card shadow-sm border-0 mb-4"
        >
            <div className="card-header bg-white py-3">

                <h2 className="h5 mb-0">
                    <i className="bi bi-diagram-3 me-2"></i>
                    Proceso de trabajo
                </h2>

            </div>


            <div className="card-body">

                <div className="row g-3">

                    <article className="col-md-6 col-xl">

                        <label
                            htmlFor="analizar"
                            className="form-label"
                        >
                            01. Analizar
                        </label>

                        <textarea
                            id="analizar"
                            name="analizar"
                            className="form-control"
                            rows="3"
                            placeholder="Descripción..."
                            value={proceso.analizar}
                            onChange={onChange}
                        />

                    </article>


                    <article className="col-md-6 col-xl">

                        <label
                            htmlFor="planificar"
                            className="form-label"
                        >
                            02. Planificar
                        </label>

                        <textarea
                            id="planificar"
                            name="planificar"
                            className="form-control"
                            rows="3"
                            placeholder="Descripción..."
                            value={proceso.planificar}
                            onChange={onChange}
                        />

                    </article>


                    <article className="col-md-6 col-xl">

                        <label
                            htmlFor="disenar"
                            className="form-label"
                        >
                            03. Diseñar
                        </label>

                        <textarea
                            id="disenar"
                            name="disenar"
                            className="form-control"
                            rows="3"
                            placeholder="Descripción..."
                            value={proceso.disenar}
                            onChange={onChange}
                        />

                    </article>


                    <article className="col-md-6 col-xl">

                        <label
                            htmlFor="desarrollar"
                            className="form-label"
                        >
                            04. Desarrollar
                        </label>

                        <textarea
                            id="desarrollar"
                            name="desarrollar"
                            className="form-control"
                            rows="3"
                            placeholder="Descripción..."
                            value={proceso.desarrollar}
                            onChange={onChange}
                        />

                    </article>


                    <article className="col-md-6 col-xl">

                        <label
                            htmlFor="entregar"
                            className="form-label"
                        >
                            05. Entregar
                        </label>

                        <textarea
                            id="entregar"
                            name="entregar"
                            className="form-control"
                            rows="3"
                            placeholder="Descripción..."
                            value={proceso.entregar}
                            onChange={onChange}
                        />

                    </article>

                </div>

            </div>

        </section>
    );
}

export default ProcessSection;