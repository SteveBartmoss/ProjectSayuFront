import './TextField.css';

export function TextField({label,isPass=false,text,action}) {

    return (
        <>
            <div className="form">
                <input type={isPass ? 'password' : 'text'} id="prueba" value={text} onChange={(event)=>action(event)} className="text-field" placeholder='' />
                <label htmlFor="field" className="text-field-label">{label}</label>
            </div>
        </>
    );
}