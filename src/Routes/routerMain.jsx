import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouterApp } from "./routerApp";

export function RouterMain(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>login</h1>} />
                <Route path="/app/*" element={<RouterApp />} />
                <Route path="login" element={<h1>Prueba</h1>} />
                <Route path="badroute" element={<h1>505</h1>} />
                <Route path="/documentation/*" element={<h1>Reto</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}