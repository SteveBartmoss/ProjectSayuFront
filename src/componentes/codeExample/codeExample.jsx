import React from "react";
import { generateCodeObjects } from "./decorator/gogh.js";
import { Btn } from "../btn/Btn.jsx";

export function CodeExample({codigo}){

    let codeElements=generateCodeObjects(codigo)

    const showCodeElement=()=>{
        console.log(codeElements)
    }

    return(
        <>
            <div>
                {
                    codeElements.map(item =>
                        <p>{item.rawToken}</p>
                    )
                }
                <Btn evento={showCodeElement} >Prueba</Btn>
            </div>
        </>
        
    )
}