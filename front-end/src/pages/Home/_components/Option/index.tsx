import style from './index.module.css';
import { Link } from 'react-router-dom';

interface props {
    image: string,
    title: string,
    label: string,
    to: string
}

export function Option({ image, title, label, to }: props) {
    return (
        <div className={style.option}>
            <img src={image} alt="" />
            <div className={style.description}>
                <h1>{title}</h1>
                <p>{label}</p>
                <Link to={to}>
                    <button>Selecionar</button>
                </Link>
            </div>
        </div>
    )
}