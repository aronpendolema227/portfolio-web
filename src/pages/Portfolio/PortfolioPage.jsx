import { useEffect, useState } from "react";
import { usePortfolio } from "../../context/PortfolioContext.jsx";

import Navbar from "../../components/portfolio/Navbar.jsx";
import Hero from "../../components/portfolio/Hero.jsx";
import Stats from "../../components/portfolio/Stats.jsx";
import About from "../../components/portfolio/About.jsx";
import Services from "../../components/portfolio/Services.jsx";
import Projects from "../../components/portfolio/Projects.jsx";
import Skills from "../../components/portfolio/Skills.jsx";
import Process from "../../components/portfolio/Process.jsx";
import Contact from "../../components/portfolio/Contact.jsx";
import Footer from "../../components/portfolio/Footer.jsx";


function PortfolioPage() {

    const { portfolioData } = usePortfolio();

    const perfil =
        portfolioData.perfil || {};

    const sobreMi =
        portfolioData.sobreMi || {};

    const estadisticas =
        portfolioData.estadisticas || {};

    const redes =
        portfolioData.redes || {};
    
    const configuracion =
        portfolioData.configuracion || {};


    const [temaActual, setTemaActual] =
        useState(() => {
            return (
                localStorage.getItem("portfolioTema") ||
                configuracion.temaInicial ||
                "light"
            );
        });


    useEffect(() => {
        document.body.setAttribute(
            "data-theme",
            temaActual
        );

        localStorage.setItem(
            "portfolioTema",
            temaActual
        );
    }, [temaActual]);


    useEffect(() => {
        const colorPrincipal =
            configuracion.colorPrincipal ||
            "#4169e1";

        document.documentElement.style.setProperty(
            "--color-primary",
            colorPrincipal
        );
    }, [configuracion.colorPrincipal]);


    const cambiarTema = () => {
        setTemaActual((tema) =>
            tema === "light"
                ? "dark"
                : "light"
        );
    };


    const nombreCompleto =
        [
            perfil.nombre,
            perfil.apellido
        ]
            .filter(Boolean)
            .join(" ") || undefined;


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


    const disponibilidad =
        textosDisponibilidad[
            perfil.disponibilidad
        ] ||
        perfil.disponibilidad ||
        undefined;


    const servicios =
        Array.isArray(portfolioData.servicios)
            ? portfolioData.servicios.map(
                (servicio, index) => ({
                    id: index + 1,

                    nombre:
                        servicio.titulo,

                    descripcion:
                        servicio.descripcion,

                    icono:
                        servicio.icono
                            ? `bi ${servicio.icono}`
                            : "bi bi-code-slash"
                })
            )
            : undefined;


    const proyectos =
        Array.isArray(portfolioData.proyectos)
            ? portfolioData.proyectos.map(
                (proyecto, index) => ({
                    id: index + 1,

                    nombre:
                        proyecto.nombre,

                    descripcion:
                        proyecto.descripcion,

                    tecnologias:
                        Array.isArray(
                            proyecto.tecnologias
                        )
                            ? proyecto.tecnologias
                            : proyecto.tecnologias
                                ?.split(",")
                                .map(
                                    (tecnologia) =>
                                        tecnologia.trim()
                                )
                                .filter(Boolean) || [],

                    imagen:
                        proyecto.imagen || "",

                    enlace:
                        proyecto.url || ""
                })
            )
            : undefined;


    const iconosHabilidades = {
        frontend:
            "bi bi-window",

        backend:
            "bi bi-server",

        database:
            "bi bi-database",

        herramienta:
            "bi bi-tools"
    };


    const nivelesHabilidades = {
        basico:
            "Básico",

        intermedio:
            "Intermedio",

        avanzado:
            "Avanzado"
    };


    const habilidades =
        Array.isArray(portfolioData.habilidades)
            ? portfolioData.habilidades.map(
                (habilidad, index) => ({
                    id: index + 1,

                    nombre:
                        habilidad.nombre,

                    nivel:
                        nivelesHabilidades[
                            habilidad.nivel
                        ] ||
                        habilidad.nivel,

                    categoria:
                        habilidad.categoria,

                    icono:
                        iconosHabilidades[
                            habilidad.categoria
                        ] ||
                        "bi bi-code-slash"
                })
            )
            : undefined;


    const procesoGuardado =
        portfolioData.proceso;


    const pasos =
        procesoGuardado
            ? [
                {
                    id: 1,
                    numero: "01",
                    titulo: "Analizar",
                    descripcion:
                        procesoGuardado.analizar,
                    icono: "bi bi-search"
                },
                {
                    id: 2,
                    numero: "02",
                    titulo: "Planificar",
                    descripcion:
                        procesoGuardado.planificar,
                    icono: "bi bi-calendar-check"
                },
                {
                    id: 3,
                    numero: "03",
                    titulo: "Diseñar",
                    descripcion:
                        procesoGuardado.disenar,
                    cono: "bi bi-pencil-square"
                },
                {
                    id: 4,
                    numero: "04",
                    titulo: "Desarrollar",
                    descripcion:
                        procesoGuardado.desarrollar,
                    icono: "bi bi-code-slash"
                },
                {
                    id: 5,
                    numero: "05",
                    titulo: "Entregar",
                    descripcion:
                        procesoGuardado.entregar,
                    icono: "bi bi-send"
                }
            ]
            : undefined;


    return (
        <>
            <Navbar
                nombre={nombreCompleto}
                tema={temaActual}
                onCambiarTema={cambiarTema}
            />

            <main>

                <Hero
                    nombre={nombreCompleto}
                    profesion={
                        perfil.profesion ||
                        undefined
                    }
                    frase={
                        perfil.frasePresentacion ||
                        undefined
                    }
                    ubicacion={
                        perfil.ubicacion ||
                        undefined
                    }
                    disponibilidad={
                        disponibilidad
                    }
                    foto={
                        perfil.fotoPerfil || ""
                    }
                    github={
                        redes.github || ""
                    }
                    linkedin={
                        redes.linkedin || ""
                    }
                    instagram={
                        redes.instagram || ""
                    }
                    cv={
                        sobreMi.cv || ""
                    }
                />


                <Stats
                    experiencia={
                        estadisticas.aniosExperiencia ??
                        0
                    }
                    proyectos={
                        estadisticas.proyectosCompletados ??
                        0
                    }
                    tecnologias={
                        estadisticas.tecnologiasDominadas ??
                        0
                    }
                    logros={
                        estadisticas.logros ??
                        0
                    }
                />


                <About
                    descripcion={
                        sobreMi.descripcion ||
                        undefined
                    }
                    ubicacion={
                        perfil.ubicacion ||
                        undefined
                    }
                    correo={
                        sobreMi.correo ||
                        undefined
                    }
                    telefono={
                        sobreMi.telefono ||
                        undefined
                    }
                    idiomas={
                        sobreMi.idiomas ||
                        undefined
                    }
                />


                <Services
                    servicios={servicios}
                />


                <Projects
                    proyectos={proyectos}
                />


                <Skills
                    habilidades={habilidades}
                />


                <Process
                    pasos={pasos}
                />


                <Contact
                    correo={
                        sobreMi.correo ||
                        undefined
                    }
                    telefono={
                        sobreMi.telefono ||
                        undefined
                    }
                />

            </main>


            <Footer
                nombre={nombreCompleto}
                profesion={
                    perfil.profesion ||
                    undefined
                }
                github={
                    redes.github || ""
                }
                linkedin={
                    redes.linkedin || ""
                }
                instagram={
                    redes.instagram || ""
                }
                web={
                    redes.webPersonal || ""
                }
            />

        </>
    );
}

export default PortfolioPage;