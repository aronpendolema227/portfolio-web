import { useState } from "react";


function DashboardSidebar({
    contraido,
    abiertoMovil,
    onCambiarContraido,
    onCerrarMovil
}) {
    const [seccionActiva, setSeccionActiva] =
        useState("perfil");


    const enlaces = [
        {
            id: "perfil",
            texto: "Perfil",
            icono: "bi bi-person"
        },
        {
            id: "sobre-mi",
            texto: "Sobre mí",
            icono: "bi bi-person-vcard"
        },
        {
            id: "estadisticas",
            texto: "Estadísticas",
            icono: "bi bi-bar-chart"
        },
        {
            id: "servicios",
            texto: "Servicios",
            icono: "bi bi-briefcase"
        },
        {
            id: "proyectos",
            texto: "Proyectos",
            icono: "bi bi-folder"
        },
        {
            id: "habilidades",
            texto: "Habilidades",
            icono: "bi bi-code-slash"
        },
        {
            id: "proceso",
            texto: "Proceso",
            icono: "bi bi-diagram-3"
        },
        {
            id: "redes",
            texto: "Redes sociales",
            icono: "bi bi-share"
        },
        {
            id: "configuracion",
            texto: "Configuración",
            icono: "bi bi-gear"
        }
    ];


    const manejarEnlace = (id) => {
        setSeccionActiva(id);
        onCerrarMovil();
    };


    return (
        <aside
            className={[
                "sidebar",
                contraido ? "collapsed" : "",
                abiertoMovil ? "mobile-open" : ""
            ]
                .filter(Boolean)
                .join(" ")}
        >

            <div className="sidebar-header">

                <div className="sidebar-title">

                    <i className="bi bi-sliders2"></i>

                    <span className="sidebar-text">
                        Configuración
                    </span>

                </div>


                <button
                    type="button"
                    className="sidebar-toggle"
                    aria-label={
                        contraido
                            ? "Expandir menú lateral"
                            : "Contraer menú lateral"
                    }
                    aria-expanded={!contraido}
                    onClick={onCambiarContraido}
                >
                    <i className="bi bi-chevron-left"></i>
                </button>

            </div>


            <nav
                className="sidebar-nav"
                aria-label="Navegación del dashboard"
            >

                {enlaces.map((enlace) => (
                    <a
                        key={enlace.id}
                        href={`#${enlace.id}`}
                        className={`sidebar-link ${
                            seccionActiva === enlace.id
                                ? "active"
                                : ""
                        }`}
                        onClick={() =>
                            manejarEnlace(enlace.id)
                        }
                    >
                        <i className={enlace.icono}></i>

                        <span className="sidebar-text">
                            {enlace.texto}
                        </span>
                    </a>
                ))}

            </nav>

        </aside>
    );
}

export default DashboardSidebar;