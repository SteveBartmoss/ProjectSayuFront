import React from "react";
import { DivTablero, GridListas } from "./componentes/Cajas";
import { Pendientes } from "./componentes/Pendientes";
import { Completadas } from "./componentes/Completadas";
import { Footer } from "./componentes/Footer";
import Progreso from "./componentes/Progreso";
import Pruebas from "./componentes/Prueabas";

export function Home() {
    return (
        <DivTablero>
            <GridListas>
                <Pendientes />
                <Progreso />
                <Pruebas />
                <Completadas />
            </GridListas>
            <Footer />
        </DivTablero>
    );
}