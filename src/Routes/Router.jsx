import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { CreateTask } from "../CreateTask";

export function RouterTablero(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="home" element={<Home />} />

                <Route path="newtask" element={<CreateTask />} />
                
            </Routes>
        </BrowserRouter>
    );
}