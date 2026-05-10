import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import Layout from "./components/Layout";
import CartView from "./components/CartView";

function App() {

    const [busqueda, setBusqueda] =
        useState("");

    return (

        <BrowserRouter>
            <Layout
                setBusqueda={setBusqueda}>
                <div className="container mt-4">
                    <h1 className="text-center mb-4">
                        E-commerce Tech
                    </h1>
                    <Routes>
                        {/* HOME */}
                        <Route path="/" element={<ItemListContainer busqueda={busqueda}/>}/>
                        {/* CATEGORÍAS */}
                        <Route path="/categoria/:categoria" element={<ItemListContainer busqueda={busqueda}/>}/>
                        {/* DETALLE */}
                        <Route path="/producto/:id" element={<ItemDetail />}/>
                        <Route path="/cart" element={<CartView />} />
                    </Routes>
                </div>
            </Layout>
        </BrowserRouter>
    );
}

export default App;