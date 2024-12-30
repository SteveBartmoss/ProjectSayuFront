import { ExtendPanel } from "../componentes/extendpanel/ExtendPanel";
import { TopBar } from "../componentes/topBar/TopBar";


export function Tablero(){
    return(
        <>
            <div>
                <ExtendPanel title="IceBox">

                </ExtendPanel>
                <ExtendPanel title="En progreso">

                </ExtendPanel>
                <ExtendPanel title="Pruebas">

                </ExtendPanel>
                <ExtendPanel title="Terminadas">

                </ExtendPanel>
            </div>
        </>
    )
}