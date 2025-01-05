import style from './index.module.css';

//Images
import logo from '../../assets/images/logo.png';

export function NavBar() {
    return (
        <header className={style.header}>
            <img src={logo} alt="" />
            <h1>Conversor de imagens</h1>
        </header>
    )
}