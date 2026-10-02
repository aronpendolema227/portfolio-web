document.addEventListener("DOMContentLoaded", () => {

    /* CONFIGURACIÓN GENERAL */

    const STORAGE_KEY = "portfolioData";


    /*  OBTENER INFORMACIÓN DE LOCALSTORAGE */

    function obtenerPortfolioData() {

        const datosGuardados =
            localStorage.getItem(STORAGE_KEY);

        if (!datosGuardados) {

            console.warn(
                "No existe información guardada para el portafolio."
            );

            return null;
        }

        try {

            return JSON.parse(datosGuardados);

        } catch (error) {

            console.error(
                "No se pudo leer la información del portafolio:",
                error
            );

            return null;
        }
    }


    const datos = obtenerPortfolioData();


    if (!datos) {
        return;
    }


    /* FUNCIONES AUXILIARES */

    function colocarTexto(id, valor) {

        const elemento =
            document.getElementById(id);

        if (!elemento) {
            return;
        }

        elemento.textContent =
            valor || "";
    }


    function configurarEnlace(id, url) {

        const enlace =
            document.getElementById(id);

        if (!enlace) {
            return;
        }

        if (url) {

            enlace.href = url;
            enlace.classList.remove("d-none");

        } else {

            enlace.classList.add("d-none");
        }
    }


    /* PERFIL / HERO */

    if (datos.perfil) {

        const perfil = datos.perfil;


        const nombreCompleto = [
            perfil.nombre,
            perfil.apellido
        ]
            .filter(Boolean)
            .join(" ");


        colocarTexto(
            "navbarNombre",
            nombreCompleto
        );


        colocarTexto(
            "heroNombre",
            nombreCompleto
        );


        colocarTexto(
            "heroProfesion",
            perfil.profesion
        );


        colocarTexto(
            "heroFrase",
            perfil.frasePresentacion
        );


        colocarTexto(
            "heroUbicacion",
            perfil.ubicacion
        );


        /* UBICACIÓN */

        const ubicacionWrapper =
            document.getElementById(
                "heroUbicacionWrapper"
            );

        if (
            ubicacionWrapper &&
            !perfil.ubicacion
        ) {
            ubicacionWrapper.classList.add(
                "d-none"
            );
        }


        /* DISPONIBILIDAD */

        const textosDisponibilidad = {

            disponible:
                "Disponible para proyectos",

            freelance:
                "Disponible para freelance",

            trabajo:
                "Buscando oportunidades laborales",

            "no-disponible":
                "No disponible actualmente"
        };


        const disponibilidadTexto =
            textosDisponibilidad[
                perfil.disponibilidad
            ] || perfil.disponibilidad || "";


        colocarTexto(
            "heroDisponibilidad",
            disponibilidadTexto
        );


        const disponibilidadWrapper =
            document.getElementById(
                "heroDisponibilidadWrapper"
            );

        if (
            disponibilidadWrapper &&
            !disponibilidadTexto
        ) {
            disponibilidadWrapper.classList.add(
                "d-none"
            );
        }


        /* FOTO */

        const heroFoto =
            document.getElementById(
                "heroFoto"
            );


        if (
            heroFoto &&
            perfil.fotoPerfil
        ) {

            heroFoto.src =
                perfil.fotoPerfil;

            heroFoto.alt =
                `Foto de ${nombreCompleto}`;

        } else if (heroFoto) {

            const contenedorFoto =
                heroFoto.closest(
                    ".hero-image-wrapper"
                );

            if (contenedorFoto) {
                contenedorFoto.classList.add(
                    "d-none"
                );
            }
        }


        /* DATOS DEL FOOTER */

        colocarTexto(
            "footerNombre",
            nombreCompleto
        );


        colocarTexto(
            "footerProfesion",
            perfil.profesion
        );


        colocarTexto(
            "footerCopyrightNombre",
            nombreCompleto
        );
    }


    /* SOBRE MÍ */

    if (datos.sobreMi) {

        const sobreMi =
            datos.sobreMi;


        colocarTexto(
            "sobreMiDescripcion",
            sobreMi.descripcion
        );


        colocarTexto(
            "sobreMiCorreo",
            sobreMi.correo
        );


        colocarTexto(
            "sobreMiTelefono",
            sobreMi.telefono
        );


        colocarTexto(
            "sobreMiIdiomas",
            sobreMi.idiomas
        );


        /* CV */

        configurarEnlace(
            "btnDescargarCv",
            sobreMi.cv
        );


        /* CONTACTO DIRECTO */

        colocarTexto(
            "contactoEmail",
            sobreMi.correo
        );


        colocarTexto(
            "contactoTelefono",
            sobreMi.telefono
        );


        const emailLink =
            document.getElementById(
                "contactoEmailLink"
            );


        if (
            emailLink &&
            sobreMi.correo
        ) {

            emailLink.href =
                `mailto:${sobreMi.correo}`;

        } else if (emailLink) {

            emailLink.classList.add(
                "d-none"
            );
        }


        const telefonoLink =
            document.getElementById(
                "contactoTelefonoLink"
            );


        if (
            telefonoLink &&
            sobreMi.telefono
        ) {

            telefonoLink.href =
                `tel:${sobreMi.telefono}`;

        } else if (telefonoLink) {

            telefonoLink.classList.add(
                "d-none"
            );
        }
    }


    /* SOBRE MÍ - UBICACIÓN */

    if (
        datos.perfil &&
        datos.perfil.ubicacion
    ) {

        colocarTexto(
            "sobreMiUbicacion",
            datos.perfil.ubicacion
        );
    }


    /* ESTADÍSTICAS */

    if (datos.estadisticas) {

        const estadisticas =
            datos.estadisticas;


        colocarTexto(
            "statExperiencia",
            estadisticas.aniosExperiencia || "0"
        );


        colocarTexto(
            "statProyectos",
            estadisticas.proyectosCompletados || "0"
        );


        colocarTexto(
            "statTecnologias",
            estadisticas.tecnologiasDominadas || "0"
        );


        colocarTexto(
            "statLogros",
            estadisticas.logros || "0"
        );
    }


    /* SERVICIOS */

    if (
        Array.isArray(datos.servicios) &&
        datos.servicios.length > 0
    ) {
        const serviciosContainer =
            document.getElementById("serviciosContainer");

        serviciosContainer.innerHTML = "";

        datos.servicios.forEach((servicio) => {

            const article =
                document.createElement("article");

            article.className =
                "col-md-6 col-xl-4";

            article.innerHTML = `
                <div class="service-card h-100">

                    <div class="service-icon">
                        <i class="bi ${servicio.icono || "bi-code-slash"}"></i>
                    </div>

                    <h3>
                        ${servicio.titulo || ""}
                    </h3>

                    <p>
                        ${servicio.descripcion || ""}
                    </p>

                </div>
            `;

            serviciosContainer.appendChild(
                article
            );
        });

    } else {

        const serviciosSection =
            document.getElementById("servicios");

        if (serviciosSection) {
            serviciosSection.classList.add("d-none");
        }
    }

    /* PROYECTOS */

    if (
        Array.isArray(datos.proyectos) &&
        datos.proyectos.length > 0
    ) {
        const proyectosContainer =
            document.getElementById("proyectosContainer");

        proyectosContainer.innerHTML = "";

        datos.proyectos.forEach((proyecto) => {

            const article =
                document.createElement("article");

            article.className =
                "col-md-6 col-xl-4";

            const imagenProyecto = proyecto.imagen
                ? `
                    <div class="project-image-wrapper">
                        <img
                            src="${proyecto.imagen}"
                            class="project-image img-fluid"
                            alt="Vista previa de ${proyecto.nombre || "proyecto"}"
                        >
                    </div>
                `
                : "";

            const tecnologias = proyecto.tecnologias
                ? `
                    <p class="project-technologies">
                        ${proyecto.tecnologias}
                    </p>
                `
                : "";

            const enlaceProyecto = proyecto.url
                ? `
                    <a
                        href="${proyecto.url}"
                        class="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver proyecto
                        <i class="bi bi-arrow-up-right"></i>
                    </a>
                `
                : "";

            article.innerHTML = `
                <div class="project-card h-100">

                    ${imagenProyecto}

                    <div class="project-content">

                        <h3>
                            ${proyecto.nombre || ""}
                        </h3>

                        <p class="project-description">
                            ${proyecto.descripcion || ""}
                        </p>

                        ${tecnologias}

                        ${enlaceProyecto}

                    </div>

                </div>
            `;

            proyectosContainer.appendChild(
                article
            );
        });

    } else {

        const proyectosSection =
            document.getElementById("proyectos");

        if (proyectosSection) {
            proyectosSection.classList.add("d-none");
        }
    }

    /* HABILIDADES */

    if (
        Array.isArray(datos.habilidades) &&
        datos.habilidades.length > 0
    ) {
        const habilidadesContainer =
            document.getElementById("habilidadesContainer");

        habilidadesContainer.innerHTML = "";


        function obtenerIconoHabilidad(categoria) {

            const iconos = {
                frontend: "bi-window",
                backend: "bi-server",
                database: "bi-database",
                herramienta: "bi-tools"
            };

            return iconos[categoria] || "bi-code-slash";
        }


        function obtenerNombreNivel(nivel) {

            const niveles = {
                basico: "Básico",
                intermedio: "Intermedio",
                avanzado: "Avanzado"
            };

            return niveles[nivel] || nivel;
        }


        datos.habilidades.forEach((habilidad) => {

            const article =
                document.createElement("article");

            article.className =
                "col-6 col-md-4 col-lg-3 habilidad-card-wrapper";

            article.dataset.categoria =
                habilidad.categoria;


            article.innerHTML = `
                <div class="skill-card h-100">

                    <div class="skill-icon">
                        <i class="bi ${obtenerIconoHabilidad(
                            habilidad.categoria
                        )}"></i>
                    </div>

                    <h3>
                        ${habilidad.nombre || ""}
                    </h3>

                    <span class="skill-level">
                        ${obtenerNombreNivel(
                            habilidad.nivel
                        )}
                    </span>

                </div>
            `;


            habilidadesContainer.appendChild(
                article
            );
        });


        /* FILTROS DE HABILIDADES*/

        const botonesFiltro =
            document.querySelectorAll(
                ".btn-skill-filter"
            );


        botonesFiltro.forEach((boton) => {

            boton.addEventListener(
                "click",
                () => {

                    /* Quitar activo */
                    botonesFiltro.forEach(
                        (item) => {
                            item.classList.remove(
                                "active"
                            );
                        }
                    );


                    /* Activar seleccionado */
                    boton.classList.add(
                        "active"
                    );


                    const filtro =
                        boton.dataset.filter;


                    const habilidades =
                        document.querySelectorAll(
                            ".habilidad-card-wrapper"
                        );


                    habilidades.forEach(
                        (habilidad) => {

                            const categoria =
                                habilidad.dataset.categoria;


                            if (
                                filtro === "todos" ||
                                categoria === filtro
                            ) {

                                habilidad.classList.remove(
                                    "d-none"
                                );

                            } else {

                                habilidad.classList.add(
                                    "d-none"
                                );
                            }
                        }
                    );
                }
            );
        });

    } else {

        const habilidadesSection =
            document.getElementById(
                "habilidades"
            );

        if (habilidadesSection) {
            habilidadesSection.classList.add(
                "d-none"
            );
        }
    }

    /* PROCESO DE TRABAJO*/

    if (datos.proceso) {

        colocarTexto(
            "procesoAnalizar",
            datos.proceso.analizar
        );

        colocarTexto(
            "procesoPlanificar",
            datos.proceso.planificar
        );

        colocarTexto(
            "procesoDisenar",
            datos.proceso.disenar
        );

        colocarTexto(
            "procesoDesarrollar",
            datos.proceso.desarrollar
        );

        colocarTexto(
            "procesoEntregar",
            datos.proceso.entregar
        );

    } else {

        const procesoSection =
            document.getElementById("proceso");

        if (procesoSection) {
            procesoSection.classList.add("d-none");
        }
    }

    /* TEMA Y COLOR PRINCIPAL */

    const btnTema = document.getElementById("btnTema");
    const iconoTema = document.getElementById("iconoTema");

    let temaActual =
        localStorage.getItem("portfolioTema") ||
        datos.configuracion?.temaInicial ||
        "light";

    const colorPrincipal =
        datos.configuracion?.colorPrincipal ||
        "#4169e1";


    /* Aplicar color configurado desde el dashboard */
    document.documentElement.style.setProperty(
        "--color-primary",
        colorPrincipal
    );


    /* Aplicar tema */
    function aplicarTema(tema) {

        document.body.setAttribute(
            "data-theme",
            tema
        );

        temaActual = tema;

        localStorage.setItem(
            "portfolioTema",
            tema
        );


        if (iconoTema) {

            if (tema === "dark") {

                iconoTema.className =
                    "bi bi-sun";

            } else {

                iconoTema.className =
                    "bi bi-moon";
            }
        }
    }


    /* Tema inicial */
    aplicarTema(temaActual);


    /* Cambiar tema */
    btnTema?.addEventListener("click", () => {

        const nuevoTema =
            temaActual === "light"
                ? "dark"
                : "light";

        aplicarTema(nuevoTema);
    });

    /*  FORMULARIO DE CONTACTO */

    const formContacto =
        document.getElementById("formContacto");

    const telefonoContacto =
        document.getElementById("contactoTelefonoInput");

    const mensajeContacto =
        document.getElementById("mensajeContacto");


    /*  VALIDAR TELÉFONO */

    function obtenerErrorTelefono(telefono) {

        if (telefono === "") {
            return "El teléfono es obligatorio.";
        }

        if (/\s/.test(telefono)) {
            return "El teléfono no debe contener espacios.";
        }

        if (/[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(telefono)) {
            return "El teléfono no debe contener letras.";
        }

        if (/[^0-9]/.test(telefono)) {
            return "El teléfono no debe contener guiones ni caracteres especiales.";
        }

        return "";
    }


    /* VALIDACIÓN EN TIEMPO REAL */

    telefonoContacto?.addEventListener("input", () => {

        const valor =
            telefonoContacto.value;

        const error =
            obtenerErrorTelefono(valor);

        const telefonoFeedback =
            document.getElementById("telefonoFeedback");


        if (error) {

            telefonoContacto.classList.add(
                "is-invalid"
            );

            telefonoContacto.classList.remove(
                "is-valid"
            );

            telefonoFeedback.textContent =
                error;

        } else {

            telefonoContacto.classList.remove(
                "is-invalid"
            );

            telefonoContacto.classList.add(
                "is-valid"
            );
        }
    });


    /* ENVIAR FORMULARIO */

    formContacto?.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /* -----------------------------------------
            VALIDACIÓN NATIVA HTML5
            ----------------------------------------- */

            if (!formContacto.checkValidity()) {

                formContacto.classList.add(
                    "was-validated"
                );

                return;
            }


            /*VALIDACIÓN PERSONALIZADA DEL TELÉFONO*/

            const telefono =
                telefonoContacto.value.trim();


            const errorTelefono =
                obtenerErrorTelefono(telefono);

            if (errorTelefono) {

                const telefonoFeedback =
                    document.getElementById(
                        "telefonoFeedback"
                    );

                telefonoFeedback.textContent =
                    errorTelefono;

                telefonoContacto.classList.add(
                    "is-invalid"
                );

                telefonoContacto.focus();

                return;
            }


            telefonoContacto.classList.remove(
                "is-invalid"
            );


            /*  OBTENER DATOS */

            const contacto = {

                nombre:
                    document.getElementById(
                        "contactoNombre"
                    ).value.trim(),

                correo:
                    document.getElementById(
                        "contactoCorreo"
                    ).value.trim(),

                telefono:
                    telefono,

                tipo:
                    document.getElementById(
                        "contactoTipo"
                    ).value,

                mensaje:
                    document.getElementById(
                        "contactoMensaje"
                    ).value.trim(),

                fecha:
                    new Date().toISOString()
            };


            /* MOSTRAR EN CONSOLA */

            console.log(
                "Formulario de contacto:",
                contacto
            );


            /*MENSAJE DE ÉXITO */

            mensajeContacto.innerHTML = `
                <div
                    class="alert alert-success"
                    role="alert"
                >
                    <i class="bi bi-check-circle me-2"></i>

                    Tu mensaje fue validado correctamente.
                </div>
            `;


            /* LIMPIAR FORMULARIO */

            formContacto.reset();

            formContacto.classList.remove(
                "was-validated"
            );


            /* QUITAR MENSAJE DESPUÉS DE 4 SEGUNDOS*/

            setTimeout(() => {

                mensajeContacto.innerHTML = "";

            }, 4000);
        }
    );

    /* REDES SOCIALES DEL HERO */

    if (datos.redes) {

        const redes =
            datos.redes;


        configurarEnlace(
            "heroGithub",
            redes.github
        );


        configurarEnlace(
            "heroLinkedin",
            redes.linkedin
        );


        configurarEnlace(
            "heroInstagram",
            redes.instagram
        );


        /* REDES DEL FOOTER */

        configurarEnlace(
            "footerGithub",
            redes.github
        );


        configurarEnlace(
            "footerLinkedin",
            redes.linkedin
        );


        configurarEnlace(
            "footerInstagram",
            redes.instagram
        );


        configurarEnlace(
            "footerWeb",
            redes.webPersonal
        );
    }


    /* AÑO DEL FOOTER */

    colocarTexto(
        "footerYear",
        new Date().getFullYear()
    );


    /*  CONFIRMACIÓN TEMPORAL */

    console.log(
        "Portafolio cargado correctamente:",
        datos
    );

});