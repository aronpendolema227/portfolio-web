import { useState } from "react";

import { usePortfolio } from "../../context/PortfolioContext.jsx";
import { convertirImagen } from "../../services/imageService.js";

import DashboardHeader from "../../components/dashboard/DashboardHeader.jsx";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar.jsx";
import ProfileSection from "../../components/dashboard/ProfileSection.jsx";
import AboutSection from "../../components/dashboard/AboutSection.jsx";
import StatsSection from "../../components/dashboard/StatsSection.jsx";
import ServicesSection from "../../components/dashboard/ServicesSection.jsx";
import ProjectsSection from "../../components/dashboard/ProjectsSection.jsx";
import SkillsSection from "../../components/dashboard/SkillsSection.jsx";
import ProcessSection from "../../components/dashboard/ProcessSection.jsx";
import SocialSection from "../../components/dashboard/SocialSection.jsx";
import SettingsSection from "../../components/dashboard/SettingsSection.jsx";
import ActionsSection from "../../components/dashboard/ActionsSection.jsx";

import "../../styles/dashboard.css";


function DashboardPage() {

    /* 
        CONTEXTO DEL PORTAFOLIO
    */

    const {
        portfolioData,
        actualizarDatos,
        eliminarDatos
    } = usePortfolio();


    /* 
        ESTADO DEL LAYOUT
    */

    const [sidebarContraido, setSidebarContraido] =
        useState(false);

    const [sidebarMovilAbierto, setSidebarMovilAbierto] =
        useState(false);


    /* 
        DATOS - PERFIL
    */

    const [perfil, setPerfil] =
        useState({
            nombre:
                portfolioData.perfil?.nombre || "",

            apellido:
                portfolioData.perfil?.apellido || "",

            profesion:
                portfolioData.perfil?.profesion || "",

            ubicacion:
                portfolioData.perfil?.ubicacion || "",

            frasePresentacion:
                portfolioData.perfil?.frasePresentacion || "",

            disponibilidad:
                portfolioData.perfil?.disponibilidad ||
                "disponible",

            fotoPerfil:
                portfolioData.perfil?.fotoPerfil || ""
        });


    /* 
        DATOS - SOBRE MÍ
    */

    const [sobreMi, setSobreMi] =
        useState({
            descripcion:
                portfolioData.sobreMi?.descripcion || "",

            correo:
                portfolioData.sobreMi?.correo || "",

            telefono:
                portfolioData.sobreMi?.telefono || "",

            idiomas:
                portfolioData.sobreMi?.idiomas || "",

            cv:
                portfolioData.sobreMi?.cv || ""
        });


    /* 
        DATOS - ESTADÍSTICAS
    */

    const [estadisticas, setEstadisticas] =
        useState({
            aniosExperiencia:
                portfolioData.estadisticas?.aniosExperiencia ?? "",

            proyectosCompletados:
                portfolioData.estadisticas?.proyectosCompletados ?? "",

            tecnologiasDominadas:
                portfolioData.estadisticas?.tecnologiasDominadas ?? "",

            logros:
                portfolioData.estadisticas?.logros ?? ""
        });

    /* 
    DATOS - SERVICIOS
    */

    const crearServicioVacio = () => ({
        id: crypto.randomUUID(),
        titulo: "",
        descripcion: "",
        icono: "bi-code-slash"
    });


    const [servicios, setServicios] =
        useState(() => {

            if (
                Array.isArray(portfolioData.servicios) &&
                portfolioData.servicios.length > 0
            ) {
                return portfolioData.servicios.map(
                    (servicio) => ({
                        id: crypto.randomUUID(),
                        titulo:
                            servicio.titulo || "",
                        descripcion:
                            servicio.descripcion || "",
                        icono:
                            servicio.icono ||
                            "bi-code-slash"
                    })
                );
            }

            return [
                crearServicioVacio()
            ];
        });

    /* 
    DATOS - PROYECTOS
    */

    const crearProyectoVacio = () => ({
        id: crypto.randomUUID(),
        nombre: "",
        descripcion: "",
        tecnologias: "",
        imagen: "",
        url: ""
    });


    const [proyectos, setProyectos] =
        useState(() => {

            if (
                Array.isArray(portfolioData.proyectos) &&
                portfolioData.proyectos.length > 0
            ) {
                return portfolioData.proyectos.map(
                    (proyecto) => ({
                        id: crypto.randomUUID(),

                        nombre:
                            proyecto.nombre || "",

                        descripcion:
                            proyecto.descripcion || "",

                        tecnologias:
                            proyecto.tecnologias || "",

                        imagen:
                            proyecto.imagen || "",

                        url:
                            proyecto.url || ""
                    })
                );
            }

            return [
                crearProyectoVacio()
            ];
        });

    /* 
    DATOS - HABILIDADES
    */

    const crearHabilidadVacia = () => ({
        id: crypto.randomUUID(),
        nombre: "",
        nivel: "basico",
        categoria: "frontend"
    });


    const [habilidades, setHabilidades] =
        useState(() => {

            if (
                Array.isArray(portfolioData.habilidades) &&
                portfolioData.habilidades.length > 0
            ) {
                return portfolioData.habilidades.map(
                    (habilidad) => ({
                        id: crypto.randomUUID(),

                        nombre:
                            habilidad.nombre || "",

                        nivel:
                            habilidad.nivel ||
                            "basico",

                        categoria:
                            habilidad.categoria ||
                            "frontend"
                    })
                );
            }

            return [
                crearHabilidadVacia()
            ];
        });

    /* 
    DATOS - PROCESO
    */

    const [proceso, setProceso] =
        useState({
            analizar:
                portfolioData.proceso?.analizar || "",

            planificar:
                portfolioData.proceso?.planificar || "",

            disenar:
                portfolioData.proceso?.disenar || "",

            desarrollar:
                portfolioData.proceso?.desarrollar || "",

            entregar:
                portfolioData.proceso?.entregar || ""
        });

    /* 
    DATOS - REDES SOCIALES
    */

    const [redes, setRedes] =
        useState({
            github:
                portfolioData.redes?.github || "",

            linkedin:
                portfolioData.redes?.linkedin || "",

            instagram:
                portfolioData.redes?.instagram || "",

            webPersonal:
                portfolioData.redes?.webPersonal || ""
        });

    /* 
    DATOS - CONFIGURACIÓN
    */

    const [configuracion, setConfiguracion] =
        useState({
            temaInicial:
                portfolioData.configuracion?.temaInicial ||
                "light",

            colorPrincipal:
                portfolioData.configuracion?.colorPrincipal ||
                "#4169e1"
        });

    /* 
        ESTADOS AUXILIARES
    */

    const [telefonoError, setTelefonoError] =
        useState("");

    const [mensaje, setMensaje] =
        useState("");


    /* 
        VALIDACIONES
    */

    const obtenerErrorTelefono = (telefono) => {

        if (telefono.trim() === "") {
            return "El teléfono es obligatorio.";
        }

        if (/\s/.test(telefono)) {
            return "El teléfono no debe contener espacios.";
        }

        if (
            /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(
                telefono
            )
        ) {
            return "El teléfono no debe contener letras.";
        }

        if (/[^0-9]/.test(telefono)) {
            return "El teléfono no debe contener guiones ni caracteres especiales.";
        }

        return "";
    };


    /* 
        MANEJADORES - PERFIL
    */

    const manejarPerfil = (event) => {

        const { name, value } =
            event.target;

        setPerfil((actual) => ({
            ...actual,
            [name]: value
        }));
    };


    const manejarFoto = async (event) => {

        const file =
            event.target.files?.[0];

        if (!file) {
            return;
        }

        try {

            const fotoProcesada =
                await convertirImagen(file);

            setPerfil((actual) => ({
                ...actual,
                fotoPerfil: fotoProcesada
            }));

        } catch (error) {

            console.error(
                "Error al procesar la imagen:",
                error
            );
        }
    };


    /* 
        MANEJADORES - SOBRE MÍ
    */

    const manejarSobreMi = (event) => {

        const { name, value } =
            event.target;

        setSobreMi((actual) => ({
            ...actual,
            [name]: value
        }));

        if (name === "telefono") {

            setTelefonoError(
                obtenerErrorTelefono(value)
            );
        }
    };


    /* 
        MANEJADORES - ESTADÍSTICAS
    */

    const manejarEstadisticas = (event) => {

        const { name, value } =
            event.target;

        setEstadisticas((actual) => ({
            ...actual,
            [name]: value
        }));
    };

    /* 
    MANEJADORES - SERVICIOS
    */

    const manejarServicio = (
        servicioId,
        event
    ) => {

        const { name, value } =
            event.target;

        setServicios((actuales) =>
            actuales.map((servicio) =>
                servicio.id === servicioId
                    ? {
                        ...servicio,
                        [name]: value
                    }
                    : servicio
            )
        );
    };


    const agregarServicio = () => {

        setServicios((actuales) => [
            ...actuales,
            crearServicioVacio()
        ]);
    };


    const eliminarServicio = (servicioId) => {

        setServicios((actuales) => {

            if (actuales.length === 1) {

                return [
                    crearServicioVacio()
                ];
            }

            return actuales.filter(
                (servicio) =>
                    servicio.id !== servicioId
            );
        });
    };

    /* 
    MANEJADORES - PROYECTOS
    */

    const manejarProyecto = (
        proyectoId,
        event
    ) => {

        const { name, value } =
            event.target;

        setProyectos((actuales) =>
            actuales.map((proyecto) =>
                proyecto.id === proyectoId
                    ? {
                        ...proyecto,
                        [name]: value
                    }
                    : proyecto
            )
        );
    };


    const manejarImagenProyecto = async (
        proyectoId,
        event
    ) => {

        const file =
            event.target.files?.[0];

        if (!file) {
            return;
        }

        try {

            const imagenProcesada =
                await convertirImagen(file);

            setProyectos((actuales) =>
                actuales.map((proyecto) =>
                    proyecto.id === proyectoId
                        ? {
                            ...proyecto,
                            imagen: imagenProcesada
                        }
                        : proyecto
                )
            );

        } catch (error) {

            console.error(
                "Error al procesar la imagen del proyecto:",
                error
            );
        }
    };


    const agregarProyecto = () => {

        setProyectos((actuales) => [
            ...actuales,
            crearProyectoVacio()
        ]);
    };


    const eliminarProyecto = (
        proyectoId
    ) => {

        setProyectos((actuales) => {

            if (actuales.length === 1) {
                return [
                    crearProyectoVacio()
                ];
            }

            return actuales.filter(
                (proyecto) =>
                    proyecto.id !== proyectoId
            );
        });
    };

    /* 
    MANEJADORES - HABILIDADES
    */

    const manejarHabilidad = (
        habilidadId,
        event
    ) => {

        const { name, value } =
            event.target;

        setHabilidades((actuales) =>
            actuales.map((habilidad) =>
                habilidad.id === habilidadId
                    ? {
                        ...habilidad,
                        [name]: value
                    }
                    : habilidad
            )
        );
    };


    const agregarHabilidad = () => {

        setHabilidades((actuales) => [
            ...actuales,
            crearHabilidadVacia()
        ]);
    };


    const eliminarHabilidad = (
        habilidadId
    ) => {

        setHabilidades((actuales) => {

            if (actuales.length === 1) {

                return [
                    crearHabilidadVacia()
                ];
            }

            return actuales.filter(
                (habilidad) =>
                    habilidad.id !== habilidadId
            );
        });
    };

    /* 
    MANEJADORES - PROCESO
    */

    const manejarProceso = (event) => {

        const { name, value } =
            event.target;

        setProceso((actual) => ({
            ...actual,
            [name]: value
        }));
    };

    /* 
    MANEJADORES - REDES SOCIALES
    */

    const manejarRedes = (event) => {

        const { name, value } =
            event.target;

        setRedes((actual) => ({
            ...actual,
            [name]: value
        }));
    };

    /* 
    MANEJADORES - CONFIGURACIÓN
    */

    const manejarConfiguracion = (event) => {

        const { name, value } =
            event.target;

        setConfiguracion((actual) => ({
            ...actual,
            [name]: value
        }));
    };

    /* 
    ACCIONES GENERALES
    */

    const manejarLimpiar = () => {

        const confirmar = window.confirm(
            "¿Estás seguro de que deseas eliminar toda la información del portafolio?"
        );

        if (!confirmar) {
            return;
        }


        eliminarDatos();

        localStorage.removeItem(
            "portfolioTema"
        );


        setPerfil({
            nombre: "",
            apellido: "",
            profesion: "",
            ubicacion: "",
            frasePresentacion: "",
            disponibilidad: "disponible",
            fotoPerfil: ""
        });


        setSobreMi({
            descripcion: "",
            correo: "",
            telefono: "",
            idiomas: "",
            cv: ""
        });


        setEstadisticas({
            aniosExperiencia: "",
            proyectosCompletados: "",
            tecnologiasDominadas: "",
            logros: ""
        });


        setServicios([
            crearServicioVacio()
        ]);


        setProyectos([
            crearProyectoVacio()
        ]);


        setHabilidades([
            crearHabilidadVacia()
        ]);


        setProceso({
            analizar: "",
            planificar: "",
            disenar: "",
            desarrollar: "",
            entregar: ""
        });


        setRedes({
            github: "",
            linkedin: "",
            instagram: "",
            webPersonal: ""
        });


        setConfiguracion({
            temaInicial: "light",
            colorPrincipal: "#4169e1"
        });


        setTelefonoError("");


        document
            .querySelectorAll(
                '#portfolioForm input[type="file"]'
            )
            .forEach((input) => {
                input.value = "";
            });


        setMensaje(
            "Información eliminada correctamente."
        );


        setTimeout(() => {
            setMensaje("");
        }, 3000);
    };

    /* 
        GUARDAR PORTAFOLIO
    */

    const manejarGuardado = (event) => {

        event.preventDefault();

        const form =
            event.currentTarget;

        const errorTelefono =
            obtenerErrorTelefono(
                sobreMi.telefono
            );

        setTelefonoError(
            errorTelefono
        );

        if (
            !form.checkValidity() ||
            errorTelefono
        ) {
            form.reportValidity();
            return;
        }

        const serviciosParaGuardar =
            servicios
                .map((servicio) => ({
                    titulo:
                        servicio.titulo.trim(),

                    descripcion:
                        servicio.descripcion.trim(),

                    icono:
                        servicio.icono
                }))
                .filter(
                    (servicio) =>
                        servicio.titulo ||
                        servicio.descripcion
                );

        const proyectosParaGuardar =
            proyectos
                .map((proyecto) => ({
                    nombre:
                        proyecto.nombre.trim(),

                    descripcion:
                        proyecto.descripcion.trim(),

                    tecnologias:
                        proyecto.tecnologias.trim(),

                    imagen:
                        proyecto.imagen,

                    url:
                        proyecto.url.trim()
                }))
                .filter(
                    (proyecto) =>
                        proyecto.nombre ||
                        proyecto.descripcion ||
                        proyecto.tecnologias ||
                        proyecto.imagen ||
                        proyecto.url
                );
        
        const habilidadesParaGuardar =
            habilidades
                .map((habilidad) => ({
                    nombre:
                        habilidad.nombre.trim(),

                    nivel:
                        habilidad.nivel,

                    categoria:
                        habilidad.categoria
                }))
                .filter(
                    (habilidad) =>
                        habilidad.nombre
                );

        actualizarDatos({
            perfil,
            sobreMi,
            estadisticas,
            servicios:
                serviciosParaGuardar,
            proyectos:
                proyectosParaGuardar,
            habilidades:
                habilidadesParaGuardar,
            proceso,
            redes,
            configuracion
        });

        setMensaje(
            "Información guardada correctamente."
        );


        setTimeout(() => {
            setMensaje("");
        }, 3000);
    };


    /* 
        RENDER
    */

    return (
        <div className="dashboard-page bg-light">

            {/* HEADER */}
            <DashboardHeader
                onAbrirSidebar={() =>
                    setSidebarMovilAbierto(true)
                }
            />


            <div className="dashboard-layout">

                {/* SIDEBAR */}
                <DashboardSidebar
                    contraido={sidebarContraido}
                    abiertoMovil={sidebarMovilAbierto}

                    onCambiarContraido={() =>
                        setSidebarContraido(
                            (estado) => !estado
                        )
                    }

                    onCerrarMovil={() =>
                        setSidebarMovilAbierto(false)
                    }
                />


                {/* CONTENIDO PRINCIPAL */}
                <main
                    className="dashboard-main p-4"
                    id="mainContent"
                >

                    {/* ENCABEZADO */}
                    <div className="mb-4">

                        <h1 className="h3 fw-bold">
                            Configuración del portafolio
                        </h1>

                        <p className="text-secondary mb-0">
                            Completa la información que se mostrará
                            en tu portafolio.
                        </p>

                    </div>


                    {/* FORMULARIO */}
                    <form
                        id="portfolioForm"
                        onSubmit={manejarGuardado}
                    >

                        {/* PERFIL */}
                        <ProfileSection
                            perfil={perfil}
                            onChange={manejarPerfil}
                            onFotoChange={manejarFoto}
                        />


                        {/* SOBRE MÍ */}
                        <AboutSection
                            sobreMi={sobreMi}
                            onChange={manejarSobreMi}
                            telefonoError={telefonoError}
                        />


                        {/* ESTADÍSTICAS */}
                        <StatsSection
                            estadisticas={estadisticas}
                            onChange={manejarEstadisticas}
                        />

                        {/* SERVICIOS */}
                        <ServicesSection
                            servicios={servicios}
                            onChange={manejarServicio}
                            onAgregar={agregarServicio}
                            onEliminar={eliminarServicio}
                        />

                        {/* PROYECTOS */}
                        <ProjectsSection
                            proyectos={proyectos}
                            onChange={manejarProyecto}
                            onImagenChange={manejarImagenProyecto}
                            onAgregar={agregarProyecto}
                            onEliminar={eliminarProyecto}
                        />

                        {/* HABILIDADES */}
                        <SkillsSection
                            habilidades={habilidades}
                            onChange={manejarHabilidad}
                            onAgregar={agregarHabilidad}
                            onEliminar={eliminarHabilidad}
                        />

                        {/* PROCESO */}
                        <ProcessSection
                            proceso={proceso}
                            onChange={manejarProceso}
                        />

                        {/* REDES SOCIALES */}
                        <SocialSection
                            redes={redes}
                            onChange={manejarRedes}
                        />

                        {/* CONFIGURACIÓN */}
                        <SettingsSection
                            configuracion={configuracion}
                            onChange={manejarConfiguracion}
                        />

                        {/* ACCIONES */}
                        <ActionsSection
                            onLimpiar={manejarLimpiar}
                        />


                        {/* MENSAJE */}
                        {mensaje && (
                            <div
                                className="alert alert-success"
                                role="alert"
                            >
                                {mensaje}
                            </div>
                        )}

                    </form>

                </main>

            </div>


            {/* OVERLAY MÓVIL */}
            <div
                className={`sidebar-overlay ${
                    sidebarMovilAbierto
                        ? "show"
                        : ""
                }`}
                onClick={() =>
                    setSidebarMovilAbierto(false)
                }
            />

        </div>
    );
}

export default DashboardPage;