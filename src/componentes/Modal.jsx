import './componentes.css';

export function Modal({ children, estado, close }) {

    return (
        <div className={estado ? 'overlay' : 'modal-close'}>
            <div className="modal-content">
                {children}
            </div>
        </div>

    )

}