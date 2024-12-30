import { ExtendPanel } from "../componentes/extendpanel/ExtendPanel";
import { TopBar } from "../componentes/topBar/TopBar";
import { TaskList } from "./TaskList";


export function Tablero(){
    return(
        <>
            <div>
                <TaskList listTitle="Por hacer" elements={[]} />

                <TaskList listTitle="En progreso" elements={[]} />

                <TaskList listTitle="En pruebas" elements={[]} />

                <TaskList listTitle="Terminadas" elements={[]} />
            </div>
        </>
    )
}