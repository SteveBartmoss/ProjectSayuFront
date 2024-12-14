import './componentes.css';

export function TextLongField({label}){

    return(
        <>
            <div className="form-area">
                <textarea className="text-long-field" placeholder='' />
                <label className="text-long-label">{label}</label>
            </div>
        </>
    )
}