import {generateUniqueIdV2} from '../helpers/uid'
import './DataTable.css';

export function DataTable({ headers, elements }) {

    return (
        <table>
            <thead>
                <tr>
                    {
                        headers.map(head =>
                            <th key={generateUniqueIdV2()} className="table-titles">{head.title}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    elements.map(item=>
                        <tr key={generateUniqueIdV2()}>
                            {
                                headers.map(head =>
                                    <td key={generateUniqueIdV2()} className="table-content">{item[head.key]}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
