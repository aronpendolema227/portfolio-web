import { Route, Routes } from "react-router-dom";

import PortfolioPage from "./pages/Portfolio/PortfolioPage.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<PortfolioPage />}
            />

            <Route
                path="/dashboard"
                element={<DashboardPage />}
            />
        </Routes>
    );
}

export default App;