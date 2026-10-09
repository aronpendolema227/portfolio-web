function SocialSection({
    redes,
    onChange
}) {
    return (
        <section
            id="redes"
            className="card shadow-sm border-0 mb-4"
        >
            <div className="card-header bg-white py-3">

                <h2 className="h5 mb-0">
                    <i className="bi bi-share me-2"></i>
                    Redes sociales
                </h2>

            </div>


            <div className="card-body">

                <div className="row g-3">

                    {/* GITHUB */}
                    <div className="col-md-6">

                        <label
                            htmlFor="github"
                            className="form-label"
                        >
                            <i className="bi bi-github me-1"></i>
                            GitHub
                        </label>

                        <input
                            type="url"
                            id="github"
                            name="github"
                            className="form-control"
                            placeholder="https://github.com/..."
                            value={redes.github}
                            onChange={onChange}
                        />

                    </div>


                    {/* LINKEDIN */}
                    <div className="col-md-6">

                        <label
                            htmlFor="linkedin"
                            className="form-label"
                        >
                            <i className="bi bi-linkedin me-1"></i>
                            LinkedIn
                        </label>

                        <input
                            type="url"
                            id="linkedin"
                            name="linkedin"
                            className="form-control"
                            placeholder="https://linkedin.com/in/..."
                            value={redes.linkedin}
                            onChange={onChange}
                        />

                    </div>


                    {/* INSTAGRAM */}
                    <div className="col-md-6">

                        <label
                            htmlFor="instagram"
                            className="form-label"
                        >
                            <i className="bi bi-instagram me-1"></i>
                            Instagram
                        </label>

                        <input
                            type="url"
                            id="instagram"
                            name="instagram"
                            className="form-control"
                            placeholder="https://instagram.com/..."
                            value={redes.instagram}
                            onChange={onChange}
                        />

                    </div>


                    {/* SITIO WEB */}
                    <div className="col-md-6">

                        <label
                            htmlFor="webPersonal"
                            className="form-label"
                        >
                            <i className="bi bi-globe me-1"></i>
                            Sitio web
                        </label>

                        <input
                            type="url"
                            id="webPersonal"
                            name="webPersonal"
                            className="form-control"
                            placeholder="https://..."
                            value={redes.webPersonal}
                            onChange={onChange}
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default SocialSection;