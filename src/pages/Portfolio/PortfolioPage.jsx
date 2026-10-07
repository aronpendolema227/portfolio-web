import Navbar from "../../components/portfolio/Navbar.jsx";

function PortfolioPage() {
    return (
        <>
            <Navbar />

            <main>
                <div className="container py-5">
                    <h1>Migración del portafolio</h1>

                    <p>
                        Navbar migrado correctamente a React.
                    </p>
                </div>
            </main>
        </>
    );
}

export default PortfolioPage;