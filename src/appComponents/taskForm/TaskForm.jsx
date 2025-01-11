import { Btn } from "../../componentes/btn/Btn";
import { Card, CardAccions } from "../../componentes/card/Card";
import { DivCol, DivRow } from "../../componentes/contenedores";
import { TextField } from "../../componentes/textField/TextField";


export function TaskForm(){
    return(
        <Card>
            <h1>Crear una nueva tarea</h1>

            <DivRow>
                <DivCol>
                    <TextField label={'Titulo'} />
                </DivCol>
            </DivRow>
            <DivRow>
                <DivCol>
                    <TextField label={'Descripcion'} />
                </DivCol>
            </DivRow>

            <CardAccions>
                <Btn>Crear tarea</Btn>
            </CardAccions>
        </Card>
    )
}