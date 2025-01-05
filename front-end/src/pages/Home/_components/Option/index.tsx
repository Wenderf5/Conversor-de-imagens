import style from './index.module.css';

interface props {
    image: string,
    label: string
}

export function Option({ image, label }: props) {
    return (
        <div className={style.option}>
            <img src={image} alt="" />
            <div className={style.description}>
                <p>{label}</p>
                <button>Selecionar</button>
            </div>
        </div>
    )
}