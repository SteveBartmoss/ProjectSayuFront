import { useState } from 'react';
import { Btn } from '../btn/Btn';
import './TopBar.css';
import { Modal } from '../modal/Modal';
import { Card, CardAccions } from '../card/Card';
import { TextField } from '../textField/TextField';
import { DivRow, DivCol } from '../contenedores/Contenedores';
import { Menu } from '../menu/Menu';
import { FaHome, FaTasks, FaNewspaper, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function TopBar(){
    const [openNewTask,setOpenNewTask] = useState(false)

    const openModalTask=()=>{
        setOpenNewTask(true)
    }

    const closeModalTask=()=>{
        setOpenNewTask(false)
    }

    const menuConfiguracion = ['Cerrar Sesion']

    return(
        <>
            <div className="top-bar-background">
                <div className="top-bar-section">
                    <span>User image</span>
                </div>
                <nav className="top-bar-section nav-buttons">
                    <Link to="/" className="nav-item">
                        <FaHome className="nav-icon" />
                        <span>Inicio</span>
                    </Link>
                    <Link to="/tareas" className="nav-item">
                        <FaTasks className="nav-icon" />
                        <span>Tareas</span>
                    </Link>
                    <Link to="/feed" className="nav-item">
                        <FaNewspaper className="nav-icon" />
                        <span>Feed</span>
                    </Link>
                    <Link to="/perfil" className="nav-item">
                        <FaUser className="nav-icon" />
                        <span>Perfil</span>
                    </Link>
                </nav>
                <div className="top-bar-section actions">
                    <Btn evento={()=>openModalTask()} variant='' >Agregar Tarea</Btn>
                    <Menu titulo={'configuracion'} elementos={menuConfiguracion} />
                </div>
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