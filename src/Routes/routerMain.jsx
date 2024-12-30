import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouterApp } from "./routerApp";
import { Login } from "../layouts/login";

export function RouterMain(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/app/*" element={<RouterApp />} />
                <Route path="login" element={<Login />} />
                <Route path="badroute" element={<h1>505</h1>} />
                <Route path="/documentation/*" element={<h1>Reto</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}