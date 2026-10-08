import {
    createContext,
    useContext,
    useState
} from "react";

import {
    obtenerPortfolioData,
    guardarPortfolioData,
    actualizarPortfolioData,
    eliminarPortfolioData
} from "../services/portfolioStorage.js";


const PortfolioContext = createContext(null);


export function PortfolioProvider({ children }) {

    const [portfolioData, setPortfolioData] =
        useState(() => obtenerPortfolioData());


    const guardarDatos = (datos) => {

        const datosGuardados =
            guardarPortfolioData(datos);

        setPortfolioData(datosGuardados);

        return datosGuardados;
    };


    const actualizarDatos = (nuevosDatos) => {

        const datosActualizados =
            actualizarPortfolioData(nuevosDatos);

        setPortfolioData(datosActualizados);

        return datosActualizados;
    };


    const recargarDatos = () => {

        const datosGuardados =
            obtenerPortfolioData();

        setPortfolioData(datosGuardados);

        return datosGuardados;
    };


    const eliminarDatos = () => {

        eliminarPortfolioData();

        setPortfolioData({});
    };


    const value = {
        portfolioData,
        guardarDatos,
        actualizarDatos,
        recargarDatos,
        eliminarDatos
    };


    return (
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    );
}


export function usePortfolio() {

    const context =
        useContext(PortfolioContext);

    if (!context) {
        throw new Error(
            "usePortfolio debe utilizarse dentro de PortfolioProvider."
        );
    }

    return context;
}