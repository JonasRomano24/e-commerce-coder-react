import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ItemListContainer from './components/ItemListContainer';
import Layout from './components/Layout';

function App() {
  const [categoria, setCategoria] = useState("todos");

  return (
    <Layout setCategoria={setCategoria}>
      <div className="container mt-4">

        <h1 className="text-center mb-4">
          E-commerce Tech
        </h1>

        <ItemListContainer 
          categoria={categoria} 
          setCategoria={setCategoria} 
        />

      </div>
    </Layout>
  );
}

export default App;