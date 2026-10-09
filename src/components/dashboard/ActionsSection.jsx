function ActionsSection({
    onLimpiar
}) {
    return (
        <section className="card shadow-sm border-0 mb-4">

            <div className="card-body">

                <div className="d-flex flex-column flex-md-row justify-content-between gap-3">

                    <div>

                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={onLimpiar}
                        >
                            <i className="bi bi-trash me-1"></i>
                            Limpiar información
                        </button>

                    </div>


                    <div className="d-flex gap-2">

                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-secondary"
                        >
                            <i className="bi bi-eye me-1"></i>
                            Vista previa
                        </a>


                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            <i className="bi bi-floppy me-1"></i>
                            Guardar cambios
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ActionsSection;