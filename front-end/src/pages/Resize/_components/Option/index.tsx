import style from './index.module.css';

interface Props {
    size: string;
}

export function Option({ size }: Props) {

    return (
        <div className={style.option}>
            <input className={style.btn_radio} id={size} type="radio" name="resize_to" value={size} />
            <label htmlFor={size}>{size}</label>
        </div>
    );
}
