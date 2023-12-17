import React from "react";
import { DivCard } from "./Cajas";

export function CardTarea({tarea}){
    return(
        <DivCard>
            <h1>{tarea.Titulo}</h1>
            <p>{tarea.Descripcion}</p>
        </DivCard>
    );
}