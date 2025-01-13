import style from './index.module.css';

//Components
import { Option } from './_components/Option';
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';

export function Convert() {
    return (
        <>
            <NavBar />
            <main className={style.main}>
                <section className={style.default_container}>
                    <form action="" method="post" className={style.form}>
                        <div className={style.chose_image}>
                            <label htmlFor="">Escolha uma imagem para converter</label>
                            <button>Escolher imagem</button>
                        </div>
                        <div className={style.chose_type_to_convert}>
                            <label htmlFor="">Converter para:</label>
                            <div className={style.container_options}>
                                <Option name='PNG' />
                                <Option name='JPG' />
                                <Option name='SVG' />
                                <Option name='PNG' />
                                <Option name='JPG' />
                                <Option name='SVG' />
                                <Option name='PNG' />
                                <Option name='JPG' />
                                <Option name='SVG' />
                                <Option name='PNG' />
                                <Option name='JPG' />
                                <Option name='SVG' />
                            </div>
                        </div>
                        <button type='submit'>Converter</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}