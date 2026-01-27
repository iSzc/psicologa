import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import CentroSer from "./Components/CentroSer/CentroSer"
import Servicos from './Components/Servicos/Servicos'
import Contato from './Components/Contato/Contato'
import Psicologa from './Components/Psicolga/Psicologa'


function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/centroser' element={<CentroSer />} />
        <Route exact path='/servicos' element={<Servicos />} />
        <Route exact path='/contato' element={<Contato />} />
        <Route exact path='/psicologa' element={<Psicologa />} />
      </Routes>
    
    )
}

export default App
