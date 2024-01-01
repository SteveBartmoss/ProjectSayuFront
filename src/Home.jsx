import React from "react";
import { DivTablero, GridListas } from "./componentes/Cajas";
import { Pendientes } from "./componentes/Pendientes";
import { Completadas } from "./componentes/Completadas";
import { Footer } from "./componentes/Footer";

export function Home() {
    return (
        <DivTablero>
            <GridListas>
                <Pendientes />
                <Completadas />
            </GridListas>
            <Footer />
        </DivTablero>
    );
}