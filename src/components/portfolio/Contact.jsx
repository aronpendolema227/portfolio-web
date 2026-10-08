import { useState } from "react";

function Contact({
    correo = "correo@ejemplo.com",
    telefono = "0999999999"
}) {
    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        tipo: "",
        mensaje: ""
    });

    const [telefonoError, setTelefonoError] = useState("");
    const [validado, setValidado] = useState(false);
    const [mensajeExito, setMensajeExito] = useState(false);

    const obtenerErrorTelefono = (telefonoIngresado) => {
        if (telefonoIngresado.trim() === "") {
            return "El teléfono es obligatorio.";
        }

        if (/\s/.test(telefonoIngresado)) {
            return "El teléfono no debe contener espacios.";
        }

        if (/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(telefonoIngresado)) {
            return "El teléfono no debe contener letras.";
        }

        if (/[^0-9]/.test(telefonoIngresado)) {
            return "El teléfono no debe contener guiones ni caracteres especiales.";
        }

        return "";
    };

    const manejarCambio = (event) => {
        const { name, value } = event.target;

        setFormulario((datosActuales) => ({
            ...datosActuales,
            [name]: value
        }));

        if (name === "telefono") {
            setTelefonoError(
                obtenerErrorTelefono(value)
            );
        }
    };

    const manejarEnvio = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        setValidado(true);

        const errorTelefono =
            obtenerErrorTelefono(formulario.telefono);

        setTelefonoError(errorTelefono);

        if (!form.checkValidity() || errorTelefono) {
            return;
        }

        const contacto = {
            ...formulario,
            fecha: new Date().toISOString()
        };

        console.log(
            "Formulario de contacto:",
            contacto
        );

        setMensajeExito(true);

        setFormulario({
            nombre: "",
            correo: "",
            telefono: "",
            tipo: "",
            mensaje: ""
        });

        setTelefonoError("");
        setValidado(false);

        setTimeout(() => {
            setMensajeExito(false);
        }, 4000);
    };

    return (
        <section
            id="contacto"
            className="section-padding contact-section"
        >
            <div className="container">

                <div className="row g-5">

                    {/* INFORMACIÓN */}
                    <div className="col-lg-5">

                        <div className="contact-intro">

                            <span className="section-label">
                                Contacto
                            </span>

                            <h2>
                                ¿Tienes un proyecto en mente?
                            </h2>

                            <p>
                                Puedes enviarme un mensaje mediante
                                el formulario y contarme sobre tu
                                proyecto o consulta.
                            </p>

                            <div className="contact-direct mt-4">

                                {correo && (
                                    <a href={`mailto:${correo}`}>
                                        <i className="bi bi-envelope"></i>

                                        <span>
                                            {correo}
                                        </span>
                                    </a>
                                )}

                                {telefono && (
                                    <a href={`tel:${telefono}`}>
                                        <i className="bi bi-telephone"></i>

                                        <span>
                                            {telefono}
                                        </span>
                                    </a>
                                )}

                            </div>

                        </div>

                    </div>

                    {/* FORMULARIO */}
                    <div className="col-lg-7">

                        <form
                            className={`contact-form ${
                                validado
                                    ? "was-validated"
                                    : ""
                            }`}
                            noValidate
                            onSubmit={manejarEnvio}
                        >

                            <div className="row g-3">

                                {/* NOMBRE */}
                                <div className="col-md-6">

                                    <label
                                        htmlFor="contactoNombre"
                                        className="form-label"
                                    >
                                        Nombre
                                    </label>

                                    <input
                                        type="text"
                                        id="contactoNombre"
                                        name="nombre"
                                        className="form-control"
                                        placeholder="Tu nombre"
                                        value={formulario.nombre}
                                        onChange={manejarCambio}
                                        required
                                    />

                                    <div className="invalid-feedback">
                                        Ingresa tu nombre.
                                    </div>

                                </div>

                                {/* CORREO */}
                                <div className="col-md-6">

                                    <label
                                        htmlFor="contactoCorreo"
                                        className="form-label"
                                    >
                                        Correo electrónico
                                    </label>

                                    <input
                                        type="email"
                                        id="contactoCorreo"
                                        name="correo"
                                        className="form-control"
                                        placeholder="correo@ejemplo.com"
                                        value={formulario.correo}
                                        onChange={manejarCambio}
                                        required
                                    />

                                    <div className="invalid-feedback">
                                        Ingresa un correo electrónico válido.
                                    </div>

                                </div>

                                {/* TELÉFONO */}
                                <div className="col-md-6">

                                    <label
                                        htmlFor="contactoTelefonoInput"
                                        className="form-label"
                                    >
                                        Teléfono
                                    </label>

                                    <input
                                        type="tel"
                                        id="contactoTelefonoInput"
                                        name="telefono"
                                        className={`form-control ${
                                            telefonoError
                                                ? "is-invalid"
                                                : formulario.telefono
                                                    ? "is-valid"
                                                    : ""
                                        }`}
                                        placeholder="0999999999"
                                        value={formulario.telefono}
                                        onChange={manejarCambio}
                                        required
                                    />

                                    <div className="invalid-feedback">
                                        {telefonoError ||
                                            "Ingresa un teléfono válido."}
                                    </div>

                                </div>

                                {/* TIPO */}
                                <div className="col-md-6">

                                    <label
                                        htmlFor="contactoTipo"
                                        className="form-label"
                                    >
                                        Tipo de consulta
                                    </label>

                                    <select
                                        id="contactoTipo"
                                        name="tipo"
                                        className="form-select"
                                        value={formulario.tipo}
                                        onChange={manejarCambio}
                                        required
                                    >
                                        <option
                                            value=""
                                            disabled
                                        >
                                            Selecciona una opción
                                        </option>

                                        <option value="desarrollo-web">
                                            Desarrollo web
                                        </option>

                                        <option value="aplicacion">
                                            Aplicación
                                        </option>

                                        <option value="base-datos">
                                            Base de datos
                                        </option>

                                        <option value="mantenimiento">
                                            Mantenimiento
                                        </option>

                                        <option value="otro">
                                            Otro
                                        </option>
                                    </select>

                                    <div className="invalid-feedback">
                                        Selecciona un tipo de consulta.
                                    </div>

                                </div>

                                {/* MENSAJE */}
                                <div className="col-12">

                                    <label
                                        htmlFor="contactoMensaje"
                                        className="form-label"
                                    >
                                        Mensaje
                                    </label>

                                    <textarea
                                        id="contactoMensaje"
                                        name="mensaje"
                                        className="form-control"
                                        rows="5"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                        value={formulario.mensaje}
                                        onChange={manejarCambio}
                                        required
                                    ></textarea>

                                    <div className="invalid-feedback">
                                        Escribe un mensaje.
                                    </div>

                                </div>

                                {/* BOTÓN */}
                                <div className="col-12">

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Enviar mensaje

                                        <i className="bi bi-send ms-1"></i>
                                    </button>

                                </div>

                            </div>

                        </form>

                        {/* MENSAJE */}
                        {mensajeExito && (
                            <div className="mt-3">

                                <div
                                    className="alert alert-success"
                                    role="alert"
                                >
                                    <i className="bi bi-check-circle me-2"></i>

                                    Tu mensaje fue validado correctamente.
                                </div>

                            </div>
                        )}

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;