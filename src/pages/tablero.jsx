import { ExtendPanel } from "../componentes/extendpanel/ExtendPanel";
import { TopBar } from "../componentes/topBar/TopBar";
import { TaskList } from "./TaskList";
import './Tablero.css';

export function Tablero(){

    const toDoList=[
        {
            id: 1,
            title: "Tarea 1",
            description: "Prueba de tarea",
            state: "creada", 
        },
        {
            id: 2,
            title: "Tarea 3",
            description: "Prueba 2",
            state: "creada", 
        },
        {
            id: 3,
            title: "Tarea 1",
            description: "Prueba 3",
            state: "creada", 
        }
    ]

    const inProgressList=[
        {
            id: 1,
            title: "Tarea 1",
            description: "Prueba de tarea",
            state: "creada", 
        },
        {
            id: 2,
            title: "Tarea 3",
            description: "Prueba 2",
            state: "creada", 
        },
        {
            id: 3,
            title: "Tarea 1",
            description: "Prueba 3",
            state: "creada", 
        }
    ]

    const inTestList=[
        {
            id: 1,
            title: "Tarea 1",
            description: "Prueba de tarea",
            state: "creada", 
        },
        {
            id: 2,
            title: "Tarea 3",
            description: "Prueba 2",
            state: "creada", 
        },
        {
            id: 3,
            title: "Tarea 1",
            description: "Prueba 3",
            state: "creada", 
        }
    ]

    const completeList=[
        {
            id: 1,
            title: "Tarea 1",
            description: "Prueba de tarea",
            state: "creada", 
        },
        {
            id: 2,
            title: "Tarea 3",
            description: "Prueba 2",
            state: "creada", 
        },
        {
            id: 3,
            title: "Tarea 1",
            description: "Prueba 3",
            state: "creada", 
        }
    ]
    return(
        <>
            <div className="div-tablero">
                <TaskList listTitle="Por hacer" elements={toDoList} />

                <TaskList listTitle="En progreso" elements={inProgressList} />

                <TaskList listTitle="En pruebas" elements={inTestList} />

                <TaskList listTitle="Terminadas" elements={completeList} />
            </div>
        </>
    )
}