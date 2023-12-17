import React from "react";
import { DivTablero } from "./componentes/Cajas";

export function CreateTask() {
    return (
        <DivTablero>
            <h1>Crear tarea</h1>
            <label>Titulo</label>
            <input type="text"></input>
            <label>Descripcion</label>
            <input type="text"></input>
        </DivTablero>
    );
}