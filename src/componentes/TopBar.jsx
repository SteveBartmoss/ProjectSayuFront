import { DivCol, DivRow } from "../componentes/contenedores";

export function TopBar() {
    return (
        <div className="div-footer">
            <DivRow>
                <h1>Top Bar</h1>
                <DivCol>
                    <input placeholder="Buscar" />
                </DivCol>
            </DivRow>

        </div>
    );
}