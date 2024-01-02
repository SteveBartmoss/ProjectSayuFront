import React from "react";
import { DivCard, DivCenter } from "./Cajas";

export function CardTarea({ tarea }) {
    return (
        <DivCard>
            <DivCenter>
                <h1 className="title-task">{tarea.Titulo}</h1>
            </DivCenter>
            <p className="content-task">{tarea.Descripcion}</p>
            <button>Completar</button>
        </DivCard>
    );
}