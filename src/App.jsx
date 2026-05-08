import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import Layout from './components/Layout';

function App() {
  const [categoria, setCategoria] = useState("todos");
  const [busqueda, setBusqueda] = useState(""); // 🔥 NUEVO

  return (
    <BrowserRouter>
      <Layout
        setCategoria={setCategoria}
        setBusqueda={setBusqueda} // 🔥 se lo pasamos al navbar
      >
        <div className="container mt-4">

          <h1 className="text-center mb-4">
            E-commerce Tech
          </h1>

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={
                <ItemListContainer
                  categoria={categoria}
                  setCategoria={setCategoria}
                  busqueda={busqueda}
                />
              }
            />

            {/* DETALLE */}
            <Route
              path="/producto/:id"
              element={<ItemDetail />}
            />

          </Routes>

        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;