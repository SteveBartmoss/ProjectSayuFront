import React from "react";
import { DivTablero, GridListas } from "./componentes/Cajas";
import { Pendientes } from "./componentes/Pendientes";
import { Completadas } from "./componentes/Completadas";

export function Home() {
    return (
        <DivTablero>
            <GridListas>
                <Pendientes />
                <Completadas />
            </GridListas>
        </DivTablero>
    );
}