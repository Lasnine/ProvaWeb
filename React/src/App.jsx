import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './Componentes/Contador'
import Digitar from './Componentes/Digitar'
// import Visivel from './Componentes/Visivel'

function App() {
  return (
    <>
      <h1>PARTE 4</h1>
      <Contador></Contador>
      <br />
      <Digitar></Digitar>
      <br />
    </>
  )
}

export default App
