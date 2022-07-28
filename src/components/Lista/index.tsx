import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((t) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={t.id}
                        {...t}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;