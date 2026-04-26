import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavbarBT from "./components/NavbarBT"
import ItemCount from "./components/ItemCount"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarBT></NavbarBT>
      <h1>Proximamente un E-commerce</h1>
      <ItemListContainer saludo="Bienvenido a mi E-commerce"/>
      <ItemCount/>
    </>
  )
}

export default App
