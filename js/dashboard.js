document.addEventListener("DOMContentLoaded", () => {
    /* SIDEBAR */
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const mobileSidebarToggle = document.getElementById("mobileSidebarToggle");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    // Determina si la pantalla actual corresponde a un dispositivo móvil.
    const isMobile = () => window.innerWidth < 768;
    // Contrae o expande el menú lateral en pantallas de escritorio.
    function setCollapsedState(collapsed) {
        if (isMobile()) return;

        sidebar.classList.toggle("collapsed", collapsed);

        sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
        sidebarToggle.setAttribute(
            "aria-label",
            collapsed ? "Expandir menú lateral" : "Contraer menú lateral"
        );
    }
    // Abre el menú lateral en dispositivos móviles y bloquea el scroll de la página.
    function openMobileSidebar() {
        sidebar.classList.add("mobile-open");
        sidebarOverlay.classList.add("show");

        mobileSidebarToggle?.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    }
    // Cierra el menú lateral móvil y restaura el desplazamiento de la página.
    function closeMobileSidebar() {
        sidebar.classList.remove("mobile-open");
        sidebarOverlay.classList.remove("show");

        mobileSidebarToggle?.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    sidebarToggle?.addEventListener("click", () => {
        setCollapsedState(!sidebar.classList.contains("collapsed"));
    });

    mobileSidebarToggle?.addEventListener("click", () => {
        if (sidebar.classList.contains("mobile-open")) {
            closeMobileSidebar();
        } else {
            openMobileSidebar();
        }
    });

    sidebarOverlay?.addEventListener("click", closeMobileSidebar);

    sidebarLinks.forEach((link) => {
        link.addEventListener("click", () => {
            sidebarLinks.forEach((item) => item.classList.remove("active"));
            link.classList.add("active");

            if (isMobile()) {
                closeMobileSidebar();
            }
        });
    });

    const sections = [...sidebarLinks]
        .map((link) => {
            const target = document.querySelector(link.getAttribute("href"));
            return target ? { link, target } : null;
        })
        .filter(Boolean);

    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (!visible) return;

            const current = sections.find(
                (item) => item.target === visible.target
            );

            if (!current) return;

            sidebarLinks.forEach((item) => item.classList.remove("active"));
            current.link.classList.add("active");
        },
        {
            root: null,
            rootMargin: "-20% 0px -65% 0px",
            threshold: [0.05, 0.15, 0.3]
        }
    );

    sections.forEach(({ target }) => observer.observe(target));

    window.addEventListener("resize", () => {
        if (!isMobile()) {
            closeMobileSidebar();
        } else {
            sidebar.classList.remove("collapsed");
        }
    });


    /* LOCALSTORAGE - DATOS PRINCIPALES Y SOBRE MÍ */

    const STORAGE_KEY = "portfolioData";
    const portfolioForm = document.getElementById("portfolioForm");
    const listaServicios = document.getElementById("listaServicios");
    const btnAgregarServicio = document.getElementById("btnAgregarServicio");
    const listaProyectos = document.getElementById("listaProyectos");
    const btnAgregarProyecto = document.getElementById("btnAgregarProyecto");
    const listaHabilidades = document.getElementById("listaHabilidades");
    const btnAgregarHabilidad = document.getElementById("btnAgregarHabilidad");
    const telefonoDashboard =
        document.getElementById("telefono");
    /* 
    Valida el número de teléfono y devuelve un mensaje de error
    cuando está vacío o contiene espacios, letras o caracteres no permitidos.
    */
    function obtenerErrorTelefono(telefono) {

        if (telefono.trim() === "") {
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

    telefonoDashboard?.addEventListener("input", () => {

        const valor =
            telefonoDashboard.value;

        const error =
            obtenerErrorTelefono(valor);

        let feedback =
            document.getElementById(
                "telefonoDashboardFeedback"
            );

        if (!feedback) {

            feedback =
                document.createElement("div");

            feedback.id =
                "telefonoDashboardFeedback";

            feedback.className =
                "invalid-feedback";

            telefonoDashboard.insertAdjacentElement(
                "afterend",
                feedback
            );
        }


        if (error) {

            telefonoDashboard.classList.add(
                "is-invalid"
            );

            telefonoDashboard.classList.remove(
                "is-valid"
            );

            feedback.textContent =
                error;

        } else {

            telefonoDashboard.classList.remove(
                "is-invalid"
            );

            if (valor !== "") {
                telefonoDashboard.classList.add(
                    "is-valid"
                );
            } else {
                telefonoDashboard.classList.remove(
                    "is-valid"
                );
            }
        }
    });
    
    function obtenerDatosGuardados() {
        const datos = localStorage.getItem(STORAGE_KEY);

        if (!datos) {
            return {};
        }

        try {
            return JSON.parse(datos);
        } catch (error) {
            console.error("No se pudo leer la información guardada:", error);
            return {};
        }
    }

    function mostrarMensaje(mensaje, tipo = "success") {
        const anterior = document.getElementById("mensajeDashboard");

        if (anterior) {
            anterior.remove();
        }

        const alerta = document.createElement("div");

        alerta.id = "mensajeDashboard";
        alerta.className =
            `alert alert-${tipo} position-fixed top-0 start-50 ` +
            "translate-middle-x mt-3 shadow-sm";
        alerta.style.zIndex = "2000";
        alerta.setAttribute("role", "alert");
        alerta.textContent = mensaje;

        document.body.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }

    function convertirImagen(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                const imagen = new Image();

                imagen.onload = () => {
                    const maxWidth = 900;
                    const maxHeight = 900;

                    let width = imagen.width;
                    let height = imagen.height;

                    const escala = Math.min(
                        1,
                        maxWidth / width,
                        maxHeight / height
                    );

                    width = Math.round(width * escala);
                    height = Math.round(height * escala);

                    const canvas = document.createElement("canvas");
                    const contexto = canvas.getContext("2d");

                    canvas.width = width;
                    canvas.height = height;

                    /* importante: limpiar el canvas para conservar transparencia */
                    contexto.clearRect(0, 0, width, height);

                    contexto.drawImage(imagen, 0, 0, width, height);

                    const esPng = file.type === "image/png";

                    let imagenProcesada;

                    if (esPng) {
                        imagenProcesada = canvas.toDataURL("image/png");
                    } else {
                        imagenProcesada = canvas.toDataURL(
                            "image/jpeg",
                            0.82
                        );
                    }

                    resolve(imagenProcesada);
                };

                imagen.onerror = () => {
                    reject(
                        new Error(
                            "No se pudo procesar la imagen."
                        )
                    );
                };

                imagen.src = reader.result;
            };

            reader.onerror = () => {
                reject(
                    new Error(
                        "No se pudo leer el archivo."
                    )
                );
            };

            reader.readAsDataURL(file);
        });
    }
    
    function crearServicio(servicio = {}) {
        const article = document.createElement("article");

        article.className = "col-lg-6 servicio-item";

        article.innerHTML = `
            <div class="border rounded p-3 h-100">

                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h3 class="h6 mb-0">
                        Servicio
                    </h3>

                    <button
                        type="button"
                        class="btn btn-outline-danger btn-sm btn-eliminar-servicio"
                        title="Eliminar servicio"
                    >
                        <i class="bi bi-trash"></i>
                    </button>
                </div>

                <div class="mb-3">
                    <label class="form-label">
                        Nombre del servicio
                    </label>

                    <input
                        type="text"
                        class="form-control servicio-titulo"
                        placeholder="Ej. Desarrollo Web"
                        value="${servicio.titulo || ""}"
                    >
                </div>

                <div class="mb-3">
                    <label class="form-label">
                        Descripción
                    </label>

                    <textarea
                        class="form-control servicio-descripcion"
                        rows="3"
                        placeholder="Describe el servicio..."
                    >${servicio.descripcion || ""}</textarea>
                </div>

                <div>
                    <label class="form-label">
                        Icono
                    </label>

                    <select class="form-select servicio-icono">

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
        `;

        const selectIcono = article.querySelector(".servicio-icono");

        selectIcono.value = servicio.icono || "bi-code-slash";

        const btnEliminar = article.querySelector(
            ".btn-eliminar-servicio"
        );

        btnEliminar.addEventListener("click", () => {
            const serviciosActuales =
                listaServicios.querySelectorAll(".servicio-item");

            if (serviciosActuales.length > 1) {
                article.remove();
            } else {
                article.querySelector(".servicio-titulo").value = "";
                article.querySelector(".servicio-descripcion").value = "";
                article.querySelector(".servicio-icono").value =
                    "bi-code-slash";
            }
        });

        return article;
    }

    

    btnAgregarServicio?.addEventListener("click", () => {
        listaServicios.appendChild(
            crearServicio()
        );
    });

    function crearProyecto(proyecto = {}) {
        const article = document.createElement("article");

        article.className = "col-lg-6 proyecto-item";
        article.dataset.imagen = proyecto.imagen || "";

        article.innerHTML = `
            <div class="border rounded p-3 h-100">

                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h3 class="h6 mb-0">
                        Proyecto
                    </h3>

                    <button
                        type="button"
                        class="btn btn-outline-danger btn-sm btn-eliminar-proyecto"
                        title="Eliminar proyecto"
                    >
                        <i class="bi bi-trash"></i>
                    </button>
                </div>

                <div class="mb-3">
                    <label class="form-label">
                        Nombre del proyecto
                    </label>

                    <input
                        type="text"
                        class="form-control proyecto-nombre"
                        placeholder="Nombre del proyecto"
                        value="${proyecto.nombre || ""}"
                    >
                </div>

                <div class="mb-3">
                    <label class="form-label">
                        Descripción
                    </label>

                    <textarea
                        class="form-control proyecto-descripcion"
                        rows="3"
                        placeholder="Descripción del proyecto..."
                    >${proyecto.descripcion || ""}</textarea>
                </div>

                <div class="mb-3">
                    <label class="form-label">
                        Tecnologías utilizadas
                    </label>

                    <input
                        type="text"
                        class="form-control proyecto-tecnologias"
                        placeholder="Ej. HTML, CSS, JavaScript"
                        value="${proyecto.tecnologias || ""}"
                    >
                </div>

                <div class="mb-3">
                    <label class="form-label">
                        Imagen del proyecto
                    </label>

                    <input
                        type="file"
                        class="form-control proyecto-imagen"
                        accept="image/*"
                    >
                </div>

                <div class="mb-3 proyecto-preview-container d-none">
                    <label class="form-label">
                        Vista previa
                    </label>

                    <div>
                        <img
                            class="proyecto-preview img-fluid rounded border"
                            alt="Vista previa del proyecto"
                            style="max-height: 180px; object-fit: cover;"
                        >
                    </div>
                </div>

                <div>
                    <label class="form-label">
                        Enlace del proyecto
                    </label>

                    <input
                        type="url"
                        class="form-control proyecto-url"
                        placeholder="https://..."
                        value="${proyecto.url || ""}"
                    >
                </div>

            </div>
        `;

        const inputImagen =
            article.querySelector(".proyecto-imagen");

        const previewContainer =
            article.querySelector(".proyecto-preview-container");

        const preview =
            article.querySelector(".proyecto-preview");

        if (proyecto.imagen) {
            preview.src = proyecto.imagen;
            previewContainer.classList.remove("d-none");
        }

        inputImagen.addEventListener("change", () => {
            const archivo = inputImagen.files[0];

            if (!archivo) {
                preview.removeAttribute("src");
                previewContainer.classList.add("d-none");
                return;
            }

            const urlTemporal = URL.createObjectURL(archivo);

            preview.src = urlTemporal;
            previewContainer.classList.remove("d-none");
        });

        const btnEliminar =
            article.querySelector(".btn-eliminar-proyecto");

        btnEliminar.addEventListener("click", () => {
            const proyectosActuales =
                listaProyectos.querySelectorAll(".proyecto-item");

            if (proyectosActuales.length > 1) {
                article.remove();
            } else {
                article.querySelector(".proyecto-nombre").value = "";
                article.querySelector(".proyecto-descripcion").value = "";
                article.querySelector(".proyecto-tecnologias").value = "";
                article.querySelector(".proyecto-url").value = "";
                article.querySelector(".proyecto-imagen").value = "";

                preview.removeAttribute("src");
                previewContainer.classList.add("d-none");
            }
        });

        return article;
    }

    btnAgregarProyecto?.addEventListener("click", () => {
        listaProyectos.appendChild(
            crearProyecto()
        );
    });

    function crearHabilidad(habilidad = {}) {
        const item = document.createElement("div");

        item.className =
            "row g-3 align-items-end mb-3 habilidad-item";

        item.innerHTML = `
            <div class="col-md-4">

                <label class="form-label">
                    Tecnología
                </label>

                <input
                    type="text"
                    class="form-control habilidad-nombre"
                    placeholder="Ej. JavaScript"
                >

            </div>


            <div class="col-md-3">

                <label class="form-label">
                    Nivel
                </label>

                <select class="form-select habilidad-nivel">

                    <option value="basico">
                        Básico
                    </option>

                    <option value="intermedio">
                        Intermedio
                    </option>

                    <option value="avanzado">
                        Avanzado
                    </option>

                </select>

            </div>


            <div class="col-md-3">

                <label class="form-label">
                    Categoría
                </label>

                <select class="form-select habilidad-categoria">

                    <option value="frontend">
                        Front-end
                    </option>

                    <option value="backend">
                        Back-end
                    </option>

                    <option value="database">
                        Base de datos
                    </option>

                    <option value="herramienta">
                        Herramienta
                    </option>

                </select>

            </div>


            <div class="col-md-2">

                <button
                    type="button"
                    class="btn btn-outline-danger w-100 btn-eliminar-habilidad"
                    title="Eliminar habilidad"
                >
                    <i class="bi bi-trash"></i>
                </button>

            </div>
        `;

        const nombre =
            item.querySelector(".habilidad-nombre");

        const nivel =
            item.querySelector(".habilidad-nivel");

        const categoria =
            item.querySelector(".habilidad-categoria");

        nombre.value = habilidad.nombre || "";

        nivel.value =
            habilidad.nivel || "basico";

        categoria.value =
            habilidad.categoria || "frontend";


        const btnEliminar =
            item.querySelector(".btn-eliminar-habilidad");

        btnEliminar.addEventListener("click", () => {

            const habilidadesActuales =
                listaHabilidades.querySelectorAll(
                    ".habilidad-item"
                );

            if (habilidadesActuales.length > 1) {

                item.remove();

            } else {

                nombre.value = "";
                nivel.value = "basico";
                categoria.value = "frontend";

            }
        });

        return item;
    }

    btnAgregarHabilidad?.addEventListener("click", () => {

        listaHabilidades.appendChild(
            crearHabilidad()
        );

    });

    function cargarDatosPrincipales() {
        const datos = obtenerDatosGuardados();

        if (datos.perfil) {
            document.getElementById("nombre").value =
                datos.perfil.nombre || "";

            document.getElementById("apellido").value =
                datos.perfil.apellido || "";

            document.getElementById("profesion").value =
                datos.perfil.profesion || "";

            document.getElementById("ubicacion").value =
                datos.perfil.ubicacion || "";

            document.getElementById("frasePresentacion").value =
                datos.perfil.frasePresentacion || "";

            document.getElementById("disponibilidad").value =
                datos.perfil.disponibilidad || "disponible";
        }

        if (datos.sobreMi) {
            document.getElementById("descripcion").value =
                datos.sobreMi.descripcion || "";

            document.getElementById("correo").value =
                datos.sobreMi.correo || "";

            document.getElementById("telefono").value =
                datos.sobreMi.telefono || "";

            document.getElementById("idiomas").value =
                datos.sobreMi.idiomas || "";

            document.getElementById("cv").value =
                datos.sobreMi.cv || "";
        }

        if (datos.estadisticas) {
            document.getElementById("aniosExperiencia").value =
                datos.estadisticas.aniosExperiencia ?? "";

            document.getElementById("proyectosCompletados").value =
                datos.estadisticas.proyectosCompletados ?? "";

            document.getElementById("tecnologiasDominadas").value =
                datos.estadisticas.tecnologiasDominadas ?? "";

            document.getElementById("logros").value =
                datos.estadisticas.logros ?? "";
        }

        if (
            Array.isArray(datos.servicios) &&
            datos.servicios.length > 0
        ) {
            listaServicios.innerHTML = "";

            datos.servicios.forEach((servicio) => {
                listaServicios.appendChild(
                    crearServicio(servicio)
                );
            });
        } else {
            listaServicios.innerHTML = "";

            listaServicios.appendChild(
                crearServicio()
            );
        }

        if (
            Array.isArray(datos.proyectos) &&
            datos.proyectos.length > 0
        ) {
            listaProyectos.innerHTML = "";

            datos.proyectos.forEach((proyecto) => {
                listaProyectos.appendChild(
                    crearProyecto(proyecto)
                );
            });
        } else {
            listaProyectos.innerHTML = "";

            listaProyectos.appendChild(
                crearProyecto()
            );
        }

        if (
            Array.isArray(datos.habilidades) &&
            datos.habilidades.length > 0
        ) {
            listaHabilidades.innerHTML = "";

            datos.habilidades.forEach((habilidad) => {
                listaHabilidades.appendChild(
                    crearHabilidad(habilidad)
                );
            });

        } else {

            listaHabilidades.innerHTML = "";

            listaHabilidades.appendChild(
                crearHabilidad()
            );
        }

        if (datos.proceso) {
            document.getElementById("proceso1").value =
                datos.proceso.analizar || "";

            document.getElementById("proceso2").value =
                datos.proceso.planificar || "";

            document.getElementById("proceso3").value =
                datos.proceso.disenar || "";

            document.getElementById("proceso4").value =
                datos.proceso.desarrollar || "";

            document.getElementById("proceso5").value =
                datos.proceso.entregar || "";
        }

        if (datos.redes) {
            document.getElementById("github").value =
                datos.redes.github || "";

            document.getElementById("linkedin").value =
                datos.redes.linkedin || "";

            document.getElementById("instagram").value =
                datos.redes.instagram || "";

            document.getElementById("webPersonal").value =
                datos.redes.webPersonal || "";
        }

        if (datos.configuracion) {
            document.getElementById("temaInicial").value =
                datos.configuracion.temaInicial || "light";

            document.getElementById("colorPrincipal").value =
                datos.configuracion.colorPrincipal || "#4169e1";
        }
    }

    portfolioForm?.addEventListener("submit", async (event) => {
        event.preventDefault();
        // Validación personalizada del teléfono
        const errorTelefono =
            obtenerErrorTelefono(
                telefonoDashboard.value
            );

        if (errorTelefono) {

            let feedback =
                document.getElementById(
                    "telefonoDashboardFeedback"
                );

            if (!feedback) {

                feedback =
                    document.createElement("div");

                feedback.id =
                    "telefonoDashboardFeedback";

                feedback.className =
                    "invalid-feedback";

                telefonoDashboard.insertAdjacentElement(
                    "afterend",
                    feedback
                );
            }
            
            feedback.textContent =
                errorTelefono;

            telefonoDashboard.classList.add(
                "is-invalid"
            );

            telefonoDashboard.focus();

            return;
        }
         // Validaciones HTML5
        if (!portfolioForm.checkValidity()) {
            portfolioForm.classList.add("was-validated");
            portfolioForm.reportValidity();
            return;
        }

        const datosActuales = obtenerDatosGuardados();

        const perfil = {
            nombre: document.getElementById("nombre").value.trim(),
            apellido: document.getElementById("apellido").value.trim(),
            profesion: document.getElementById("profesion").value.trim(),
            ubicacion: document.getElementById("ubicacion").value.trim(),
            frasePresentacion:
                document.getElementById("frasePresentacion").value.trim(),
            disponibilidad:
                document.getElementById("disponibilidad").value,
            fotoPerfil: datosActuales.perfil?.fotoPerfil || ""
        };

        const sobreMi = {
            descripcion:
                document.getElementById("descripcion").value.trim(),
            correo:
                document.getElementById("correo").value.trim(),
            telefono:
                document.getElementById("telefono").value.trim(),
            idiomas:
                document.getElementById("idiomas").value.trim(),
            cv:
                document.getElementById("cv").value.trim()
        };

        const inputFoto = document.getElementById("fotoPerfil");
        const nuevaFoto = inputFoto.files[0];

        try {
            if (nuevaFoto) {
                perfil.fotoPerfil = await convertirImagen(nuevaFoto);
            }

            const estadisticas = {
                aniosExperiencia:
                    document.getElementById("aniosExperiencia").value,

                proyectosCompletados:
                    document.getElementById("proyectosCompletados").value,

                tecnologiasDominadas:
                    document.getElementById("tecnologiasDominadas").value,

                logros:
                    document.getElementById("logros").value
            };

            const servicios = [];

            document
                .querySelectorAll(".servicio-item")
                .forEach((item) => {

                    const titulo =
                        item.querySelector(".servicio-titulo").value.trim();

                    const descripcion =
                        item.querySelector(
                            ".servicio-descripcion"
                        ).value.trim();

                    const icono =
                        item.querySelector(".servicio-icono").value;

                    if (titulo || descripcion) {
                        servicios.push({
                            titulo,
                            descripcion,
                            icono
                        });
                    }
                });
            
            const proyectos = [];

            const proyectosItems =
                document.querySelectorAll(".proyecto-item");

            for (const item of proyectosItems) {

                const nombre =
                    item.querySelector(".proyecto-nombre").value.trim();

                const descripcion =
                    item.querySelector(
                        ".proyecto-descripcion"
                    ).value.trim();

                const tecnologias =
                    item.querySelector(
                        ".proyecto-tecnologias"
                    ).value.trim();

                const url =
                    item.querySelector(".proyecto-url").value.trim();

                const inputImagen =
                    item.querySelector(".proyecto-imagen");

                let imagen =
                    item.dataset.imagen || "";

                const nuevaImagen =
                    inputImagen.files[0];

                if (nuevaImagen) {
                    imagen = await convertirImagen(nuevaImagen);
                    item.dataset.imagen = imagen;
                }

                if (
                    nombre ||
                    descripcion ||
                    tecnologias ||
                    url ||
                    imagen
                ) {
                    proyectos.push({
                        nombre,
                        descripcion,
                        tecnologias,
                        imagen,
                        url
                    });
                }
            }

            const habilidades = [];

            document
                .querySelectorAll(".habilidad-item")
                .forEach((item) => {

                    const nombre =
                        item.querySelector(
                            ".habilidad-nombre"
                        ).value.trim();

                    const nivel =
                        item.querySelector(
                            ".habilidad-nivel"
                        ).value;

                    const categoria =
                        item.querySelector(
                            ".habilidad-categoria"
                        ).value;

                    if (nombre) {
                        habilidades.push({
                            nombre,
                            nivel,
                            categoria
                        });
                    }
                });
            
            const proceso = {
                analizar:
                    document.getElementById("proceso1").value.trim(),

                planificar:
                    document.getElementById("proceso2").value.trim(),

                disenar:
                    document.getElementById("proceso3").value.trim(),

                desarrollar:
                    document.getElementById("proceso4").value.trim(),

                entregar:
                    document.getElementById("proceso5").value.trim()
            };

            const redes = {
                github:
                    document.getElementById("github").value.trim(),

                linkedin:
                    document.getElementById("linkedin").value.trim(),

                instagram:
                    document.getElementById("instagram").value.trim(),

                webPersonal:
                    document.getElementById("webPersonal").value.trim()
            };

            const configuracion = {
                temaInicial:
                    document.getElementById("temaInicial").value,

                colorPrincipal:
                    document.getElementById("colorPrincipal").value
            };

            const portfolioData = {
                ...datosActuales,
                perfil,
                sobreMi,
                estadisticas,
                servicios,
                proyectos,
                habilidades,
                proceso,
                redes,
                configuracion,
                ultimaActualizacion: new Date().toISOString()
            };

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(portfolioData)
            );

            portfolioForm.classList.remove("was-validated");

            mostrarMensaje(
                "Información del portafolio guardada correctamente."
            );

            console.log("Información guardada:", portfolioData);

        } catch (error) {
            console.error("Error al guardar:", error);

            mostrarMensaje(
                "No se pudo guardar la información. Revisa el tamaño de la imagen.",
                "danger"
            );
        }
    });

    cargarDatosPrincipales();
});
