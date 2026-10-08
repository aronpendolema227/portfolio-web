const STORAGE_KEY = "portfolioData";


export function obtenerPortfolioData() {
    const datosGuardados =
        localStorage.getItem(STORAGE_KEY);

    if (!datosGuardados) {
        return {};
    }

    try {
        return JSON.parse(datosGuardados);
    } catch (error) {
        console.error(
            "No se pudo leer la información del portafolio:",
            error
        );

        return {};
    }
}


export function guardarPortfolioData(datos) {
    try {
        const datosActualizados = {
            ...datos,
            ultimaActualizacion:
                new Date().toISOString()
        };

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(datosActualizados)
        );

        return datosActualizados;

    } catch (error) {
        console.error(
            "No se pudo guardar la información del portafolio:",
            error
        );

        throw error;
    }
}


export function actualizarPortfolioData(nuevosDatos) {
    const datosActuales =
        obtenerPortfolioData();

    const datosActualizados = {
        ...datosActuales,
        ...nuevosDatos
    };

    return guardarPortfolioData(
        datosActualizados
    );
}


export function eliminarPortfolioData() {
    localStorage.removeItem(STORAGE_KEY);
}


export { STORAGE_KEY };