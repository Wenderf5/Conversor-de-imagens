import style from './index.module.css';

interface props {
    image: string,
    title: string,
    label: string
}

export function Option({ image, title, label }: props) {
    return (
        <div className={style.option}>
            <img src={image} alt="" />
            <div className={style.description}>
                <h1>{title}</h1>
                <p>{label}</p>
                <button>Selecionar</button>
            </div>
        </div>
    )
}