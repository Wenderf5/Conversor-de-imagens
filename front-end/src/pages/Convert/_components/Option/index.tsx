import style from './index.module.css';

interface Props {
    name: string;
}

export function Option({ name }: Props) {

    return (
        <div className={style.option}>
            <input
                className={style.btn_radio}
                id={name} type="radio"
                name="convert_to"
                value={name}
            />
            <label htmlFor={name}>{name}</label>
        </div>
    );
}
