import style from './Relogio.module.scss';

interface Props {
    tempo: number | undefined
}

function Relogio({ tempo = 0 }: Props) {
    const min = Math.floor(tempo / 60);
    const seg = tempo % 60;
    const [minDezena, minUnidade] = String(min).padStart(2, '0');
    const [segDezena, segUnidade] = String(seg).padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>{minDezena}</span>
            <span className={style.relogioNumero}>{minUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segDezena}</span>
            <span className={style.relogioNumero}>{segUnidade}</span>
        </>
    )
}

export default Relogio;