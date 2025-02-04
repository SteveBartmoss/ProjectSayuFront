import { useState } from "react";
import { Btn } from "../../componentes/btn/Btn";
import { Card, CardAccions } from "../../componentes/card/Card";
import { DivCol, DivRow } from "../../componentes/contenedores";
import { TextField } from "../../componentes/textField/TextField";
import { useDispatch } from "react-redux";
import {addTask} from "../../features/taskSlice"

export function TaskForm(){

    const dispach = useDispatch()

    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')

    const handleTitle=(event)=>{
        setTitle(event.target.value)
    }

    const handleDescription=(event)=>{
        setDescription(event.target.value)
    }

    const createTask=()=>{
        dispach(addTask({
            id: 1,
            title: title,
            description: description,
            state: "creada",
        }))
    }

    return(
        <Card>
            <h1>Crear una nueva tarea</h1>

            <DivRow>
                <DivCol>
                    <TextField label={'Titulo'} text={title} action={handleTitle} />
                </DivCol>
            </DivRow>
            <DivRow>
                <DivCol>
                    <TextField label={'Descripcion'} text={description} action={handleDescription} />
                </DivCol>
            </DivRow>

            <CardAccions>
                <Btn evento={()=>createTask()}>Crear tarea</Btn>
            </CardAccions>
        </Card>
    )
}