import { Btn } from "../../componentes/btn/Btn";
import { Card } from "../../componentes/card/Card";
import { DivCol, DivRow } from "../../componentes/contenedores";
import { DataTable } from "../../componentes/datatable/DataTable";
import { TextField } from "../../componentes/textField/TextField";


export function Usuarios() {

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
                        <Btn>Agregar Usuario</Btn>
                    </DivCol>
                </DivRow>
                <DataTable headers={encabezados} elements={elementos} />
            </Card>
        </>
    )
}