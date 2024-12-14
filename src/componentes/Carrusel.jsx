import { useState } from "react";
import { DivCol, DivRow } from "./contenedores";
import './componentes.css';
import { Btn } from "../componentes/btn/Btn";


export function Carrusel({ elements }) {

    const [item, setItem] = useState(0);

    const siguiente = () => {
        if (item >= elements.length - 1) {
            setItem(0)
            return
        }
        setItem(item + 1)
    }

    const anterior = () => {
        if (item <= 0) {
            setItem(elements.length - 1)
            return
        }
        setItem(item - 1)
    }

    return (
        <DivCol>
            <DivRow>
                {
                    elements[item].content
                }
            </DivRow>
            <DivRow>
                <div className="carrusel-buttons">
                    <Btn color={'principal'} evento={anterior}>Anterior</Btn>

                    <DivRow>
                        {
                            elements.map((element,index)=>{
                                return <div key={index} className={index === item ? 'dot-selected':'dot-carrusel'}></div>
                            })
                        }
                    </DivRow>
                    
                    <Btn color={'principal'} evento={siguiente}>Siguiente</Btn>
                </div>
            </DivRow>
        </DivCol>
    )
}