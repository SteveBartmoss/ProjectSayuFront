import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../componentes/NavBar";
import { Home } from "../Home";
import { CreateTask } from "../CreateTask";

export function RouterTablero(){
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="home" element={<Home />} />

                <Route path="newtask" element={<CreateTask />} />
                
            </Routes>
        </BrowserRouter>
    );
}