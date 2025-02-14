import { Btn } from "../../componentes/btn/Btn";
import { Card, CardAccions } from "../../componentes/card/Card";
import { DivRow } from "../../componentes/contenedores";
import { Modal } from "../../componentes/modal/Modal";
import { TextField } from "../../componentes/textField/TextField";


export function UserForm({isOpen}){

    return(
        <>
            <Modal estado={isOpen}>

            </Modal>
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
                </CardAccions>
            </Card>
        </>
    )
}