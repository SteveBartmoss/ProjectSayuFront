import { useState } from 'react';
import { Btn } from '../btn/Btn';
import './TopBar.css';
<<<<<<< HEAD
import { FaHome, FaTasks, FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function TopBar() {
    return (
        <div className="top-bar-background">
            <nav className="top-bar-nav">
                <Link to="/" className="nav-item">
                    <FaHome className="nav-icon" />
                    <span>Inicio</span>
                </Link>
                
                <Link to="/tareas" className="nav-item">
                    <FaTasks className="nav-icon" />
                    <span>Tareas</span>
                </Link>
                
                <Link to="/perfil" className="nav-item">
                    <FaUser className="nav-icon" />
                    <span>Perfil</span>
                </Link>
                
                <Link to="/configuracion" className="nav-item">
                    <FaCog className="nav-icon" />
                    <span>Configuración</span>
                </Link>
            </nav>
        </div>
    );
=======
import { Modal } from '../modal/Modal';
import { Card, CardAccions } from '../card/Card';
import { TextField } from '../textField/TextField';
import { DivRow } from '../contenedores/Contenedores';
import { DivCol } from '../contenedores/Contenedores';
import { Menu } from '../menu/Menu';

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
                <span>User image</span>
                <Menu titulo={'configuracion'} elementos={menuConfiguracion} />
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
>>>>>>> master
}