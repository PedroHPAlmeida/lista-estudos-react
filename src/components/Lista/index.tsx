import React from "react";
import style from './Lista.module.scss';

function Lista() {

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },
    {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    },
    {
        tarefa: 'Python',
        tempo: '01:30:00'
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((t, key) => (
                    <li key={key} className={style.item}>
                        <h3>{t.tarefa}</h3>
                        <span>{t.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;