import { Btn } from "../componentes/btn/Btn";
import { DivCol, DivRow } from "../componentes/contenedores";


export function BadRoute(){

    
    return(
        <>
            <DivRow>
                <DivCol>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <Btn>Regresar</Btn>
                </DivCol>
            </DivRow>
        </>
    )
}