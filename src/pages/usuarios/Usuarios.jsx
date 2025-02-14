import { useState } from "react";
import { Btn } from "../../componentes/btn/Btn";
import { Card, CardAccions } from "../../componentes/card/Card";
import { DivCol, DivRow } from "../../componentes/contenedores";
import { DataTable } from "../../componentes/datatable/DataTable";
import { TextField } from "../../componentes/textField/TextField";
import { Modal } from "../../componentes/modal/Modal";


export function Usuarios() {

    const [openUser, setOpenUser] = useState(false)



    const openModalUser = () => {
        setOpenUser(true)
    }

    const closeModalUser = () => {
        setOpenUser(false)
    }

    const encabezados = [
        {
            title: 'Usuario',
            key: 'name'
        },
        {
            title: 'Correo',
            key: 'mail'
        },
        {
            title: 'Telefono',
            key: 'telefono'
        }
    ]

    const elementos = [
        {
            name: 'Steve',
            mail: 'steve@maker.com',
            telefono: '3311892077'
        },
        {
            name: 'Tony',
            mail: 'tony@maker.com',
            telefono: '3311892077'
        },
        {
            name: 'Peter',
            mail: 'peter@maker.com',
            telefono: '3311892077'
        }
    ]

    return (
        <>
            <Card>
                <h1>Configuracion de usuarios</h1>
                <DivRow>
                    <DivCol>
                        <Btn evento={()=>openModalUser()}>Agregar Usuario</Btn>
                    </DivCol>
                </DivRow>
                <DataTable headers={encabezados} elements={elementos} />
            </Card>

            <Modal estado={openUser} close={closeModalUser} persistent={true}>
                <Card>
                    <h1>Agregar Usuario</h1>
                    <DivRow>
                        <DivCol>
                            <TextField label={'Nombre de Usuario'} />
                        </DivCol>
                        <DivCol>
                            <TextField label={'Correo'} />
                        </DivCol>
                    </DivRow>
                    <CardAccions>
                        <Btn>Guardar</Btn>
                        <Btn evento={()=>closeModalUser()} variant='' color='error'>Cancelar</Btn>
                    </CardAccions>
                </Card>
            </Modal>
        </>
    )
}