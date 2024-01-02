import React from "react";
import { DivCard } from "./Cajas";

export function CardTarea({tarea}){
    return(
        <DivCard>
            <h1  className="title-task">{tarea.Titulo}</h1>
            <p className="content-task">{tarea.Descripcion}</p>
            <button>Completar</button>
        </DivCard>
    );
}