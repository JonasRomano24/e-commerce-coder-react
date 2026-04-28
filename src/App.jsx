import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer'

import ItemCount from "./components/ItemCount"
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
      <h1>Próximamente un E-commerce By Jonas</h1>

      <ItemListContainer saludo="Bienvenido a mi E-commerce" />

      <ItemCount />
    </Layout>
    </>
  )
}

export default App
