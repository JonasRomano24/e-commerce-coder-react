import NavbarBT from "./NavbarBT";

const Layout = ({ children, setCategoria, setBusqueda }) => {
    return (
        <>
            <header>
                <NavbarBT 
                    setCategoria={setCategoria}
                    setBusqueda={setBusqueda} // 🔥 NUEVO
                />
            </header>

            <main className="container mt-4">
                {children}
            </main>

            <footer className="text-center mt-5 p-3 bg-dark text-light">
                <p>© Byte Zone - Jonas Romano</p>
            </footer>
        </>
    );
};

export default Layout;