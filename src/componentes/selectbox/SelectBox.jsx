import './SelectBox.css';
import { v4 as uuidv4 } from 'uuid';

export function SelectBox({label,items,placeMessage}) {
    return (
        <div className='form-select-box'>
            <select className='select-box' defaultValue=''>
                <option value='' >{placeMessage}</option>
                {
                    items.map(item =>
                        <option key={uuidv4()} value={item.value}>{item.title}</option>
                    )
                }
            </select>
            <span className='select-box-label'>{label}</span>
        </div>
    )
}