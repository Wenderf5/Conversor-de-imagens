import style from './index.module.css';
import { Option } from './_components/Option';

//Images
import convert_option_img from '../../assets/images/DALL·E-2025-01-05-16.48.png';
import resize_option_img from '../../assets/images/DALL·E-2025-01-05-16.50.41-An-image-showing-a-graphic-interface-for-resizing-images.png';

export function Home() {
    return (
        <main className={style.main}>
            <section className={style.default_container}>
                <Option image={convert_option_img} label='Escolha o formato de saída para sua imagem. Converta facilmente entre diferentes tipos de arquivo, como JPG, PNG, SVG e outros.' />
                <Option image={resize_option_img} label='Reduza ou aumente o tamanho da imagem ajustando suas dimensões em pixels conforme necessário.' />
            </section>
        </main>
    )
}