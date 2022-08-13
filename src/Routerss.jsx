import React from 'react'
import Navbars from './component/Navbars';
import Home from './component/Home';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Individual from './component/Individual';
  import Team from './component/Team';
  import Enterprise from './component/Enterprise';

function Routerss() {
  return (
        <BrowserRouter>
        <Navbars/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/individual" element={<Individual />}/>
                <Route path="/team" element={<Team />}/>
                <Route path="/enterprise" element={<Enterprise />}/>
            </Routes>
        </BrowserRouter>
  )
}

export default Routerss