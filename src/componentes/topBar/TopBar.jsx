import { useState } from 'react';
import { Btn } from '../btn/Btn';
import './TopBar.css';
import { Modal } from '../modal/Modal';
import { Card, CardAccions } from '../card/Card';
import { TextField } from '../textField/TextField';
import { DivRow } from '../contenedores/Contenedores';
import { DivCol } from '../contenedores/Contenedores';

export function TopBar(){
    
    const [openNewTask,setOpenNewTask] = useState(false)

    const openModalTask=()=>{
        setOpenNewTask(true)
    }

    const closeModalTask=()=>{
        setOpenNewTask(false)
    }

    return(
        <>
            <div className="top-bar-background">
                <span>User image</span>
                <span>Config menu</span>
                <Btn evento={()=>openModalTask()} variant='' >Aregar Tarea</Btn>
                <span>Top Bar</span>
            </div>

            <Modal estado={openNewTask} close={closeModalTask} persistent={true}>
                <Card>
                    <h1>Nueva tarea</h1>
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
                        
                        <Btn>Guardar</Btn>
                        <Btn evento={()=>closeModalTask()} variant='' color='error'>Cancelar</Btn>
                    </CardAccions>
                </Card>
            </Modal>
        </>
    )
}