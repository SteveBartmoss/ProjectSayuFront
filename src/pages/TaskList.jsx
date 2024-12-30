import { ExtendPanel } from "../componentes/extendpanel/ExtendPanel";


export function TaskList({listTitle="",elements=[]}){
    return(
        <>
            <ExtendPanel  title={listTitle}>
                {
                    elements.map(task =>
                        <div key={task.id}>
                            <h1>{task.title}</h1>
                            <p>{task.description}</p>
                            <span>{task.state}</span>
                        </div>
                    )
                }
            </ExtendPanel>
        </>
    )
}