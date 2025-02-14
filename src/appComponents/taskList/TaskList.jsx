
import { Card } from '../../componentes/card/Card';
import { ExtendPanel } from '../../componentes/extendpanel/ExtendPanel';
import './TaskList.css';


export function TaskList({ listTitle = "", elements = [] }) {
    return (
        <>
            <ExtendPanel title={listTitle}>
                <div className="div-list-taks">
                    {
                        elements.map(task =>
                            <Card key={task.id}>
                                <h1>{task.title}</h1>
                                <p>{task.description}</p>
                                <span>{task.state}</span>
                            </Card>
                        )
                    }
                </div>
            </ExtendPanel>
        </>
    )
}