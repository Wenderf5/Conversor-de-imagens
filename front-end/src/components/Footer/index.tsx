import style from './index.module.css';

export function Footer() {
    return (
        <footer className={style.footer}>
            <p>Feito por: Wender fabiano</p>
            <p>E-mail: wenderfabianoalves@gmail.com</p>
            <p>Repository: <a href="https://github.com/Wenderf5/Conversor-de-imagens" target='_blank'>https://github.com/Wenderf5/Conversor-de-imagens</a></p>
        </footer>
    )
}