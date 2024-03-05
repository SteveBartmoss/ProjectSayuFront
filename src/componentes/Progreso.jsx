import React, { useState } from "react";
import { DivLista, DivScrooll } from "./Cajas";
import { CardTarea } from "./CardTarea";

function Progreso() {

    const [tareas, setTareas] = useState([
        { Titulo: "Completar aplicacion", Descripcion: "Se debe completar la aplicacion del tablero" },
        { Titulo: "Subir video", Descripcion: "Se debe subir el nuevo video a stevechambitas" },
        { Titulo: "Jugar Elden Ring", Descripcion: "Se debe completar elden ring" },
        { Titulo: "Completar pase", Descripcion: "Se debe completar el pase de batallas de fornite" },
        { Titulo: "completar Miniaturas", Descripcion: "Se deben completar la miniaturas" },
        { Titulo: "Ver proyecyo X", Descripcion: "Se debe terminar de ver proyecto X" },
        { Titulo: "Terminar el libro", Descripcion: "Se debe completar el libro" },
        { Titulo: "Formar la empresa", Descripcion: "Se debe formar la empresa devfarm" }
    ]);

    return(
        <>
            <DivLista>
                <DivLista>
                    <h1 className="title-lista">Tareas en Progreso</h1>
                </DivLista>
                <DivScrooll>
                    {
                        tareas.map(
                            tarea => <CardTarea tarea={tarea} />
                        )
                    }
                </DivScrooll>
            </DivLista>
        </>
    );
}

export default Progreso;