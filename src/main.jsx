import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/portfolio.css";

import App from "./App.jsx";
import { PortfolioProvider } from "./context/PortfolioContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <PortfolioProvider>
                <App />
            </PortfolioProvider>
        </BrowserRouter>
    </StrictMode>
);