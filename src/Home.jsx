import React from "react";
import { DivTablero } from "./componentes/Cajas";
import { Pendientes } from "./componentes/Pendientes";
import { Completadas } from "./componentes/Completadas";

export function Home() {
    return (
        <DivTablero>
            <h1>home XD</h1>
            <Pendientes />
            <Completadas />
        </DivTablero>
    );
}