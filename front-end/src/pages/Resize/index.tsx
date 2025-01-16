import style from './index.module.css';
import { useEffect, useRef, useState } from 'react';
import { Upload } from 'lucide-react';

//Components
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Option } from './_components/Option';

export function Resize() {
    const fileRef = useRef<HTMLInputElement | null>(null);
    const [imageError, setImageError] = useState(false);
    const [errorSize, setErrorSize] = useState(false);
    const [fileName, setFileName] = useState<string | undefined>(undefined);

    useEffect(() => {
        function handleFileChange() {
            setFileName(fileRef.current?.files?.[0].name);
        };

        fileRef.current?.addEventListener('change', handleFileChange);

        return () => {
            fileRef.current?.removeEventListener('change', handleFileChange);
        };
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!fileRef.current?.files?.[0]) {
            setImageError(true);
            setTimeout(() => {
                setImageError(false);
            }, 3000);
            return;
        }

        if (!e.currentTarget.resize_to.value) {
            setErrorSize(true);
            setTimeout(() => {
                setErrorSize(false);
            }, 3000);
            return;
        }

        console.log(fileRef.current?.files?.[0].name);
        console.log(e.currentTarget.resize_to.value);

        // const response = await fetch('URL', {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'POST',
        //     body: JSON.stringify({
        //         image: fileRef.current?.files?.[0],
        //         convert_to: e.currentTarget.convert_to.value
        //     })
        // });
    }
    return (
        <>
            <NavBar />
            <main className={style.main}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.container_choose_image}>
                        <label>Selecione uma imagem do seu dispositivo para redimensionar</label>
                        {fileName && (
                            <p>{fileName}</p>
                        )}
                        {imageError && (
                            <p className={style.image_error_msg}>Por favor selecione uma imagem!</p>
                        )}
                        <label htmlFor="input-file" className={style.custon_input_file}> <Upload size={16}/>Selecionar</label>
                        <input
                            id="input-file"
                            type="file"
                            ref={fileRef}
                        />
                    </div>
                    <div className={style.container_choose_size}>
                        <label htmlFor="">Selecione o tamanho para o qual deseja redimensionar a imagem</label>
                        {errorSize && (
                            <p className={style.error_size}>Por favor selecione um tamanho!</p>
                        )}
                        <div className={style.container_size}>
                            <Option size='32x32' />
                            <Option size='48x48' />
                            <Option size='64x64' />
                            <Option size='128x128' />
                            <Option size='256x256' />
                            <Option size='300x300' />
                            <Option size='400x400' />
                            <Option size='600x400' />
                            <Option size='800x600' />
                            <Option size='820x312 ' />
                            <Option size='1000x1500' />
                            <Option size='1080x1080' />
                            <Option size='1080x1350 ' />
                            <Option size='1200x630' />
                            <Option size='1200x628' />
                            <Option size='1200x675' />
                            <Option size='1200x800' />
                            <Option size='1584x396' />
                            <Option size='2048x2048' />
                        </div>
                    </div>
                    <input className={style.input_submit} type='submit' value={"Redimensionar"} />
                </form>
            </main>
            <Footer />
        </>
    )
}