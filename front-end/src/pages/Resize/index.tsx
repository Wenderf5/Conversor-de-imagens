import style from './index.module.css';
import { useState } from 'react';
import { Upload } from 'lucide-react';

//Components
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Option } from './_components/Option';

export function Resize() {
    const sizes = ["32x32", "48x48", "64x64", "128x128", "256x256",
        "300x300", "400x400", "600x400", "800x600", "820x312", "1000x1500",
        "1080x1080", "1080x1350", "1200x630", "1200x628", "1200x675", "1200x800",
        "1584x396", "2048x2048"];
    const [imageError, setImageError] = useState(false);
    const [errorSize, setErrorSize] = useState(false);
    const [fileName, setFileName] = useState<string | undefined>(undefined);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFileName(e.currentTarget.files?.[0].name);
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;

        if (!form.image.files[0]) {
            setImageError(true);
            setTimeout(() => {
                setImageError(false);
            }, 3000);
            return;
        }

        if (!form.resize_to.value) {
            setErrorSize(true);
            setTimeout(() => {
                setErrorSize(false);
            }, 3000);
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // const response = await fetch('URL', {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // });
        // const responseData = await response.json();

        console.log("Requsição enviada!");
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
                        <label htmlFor="input-file" className={style.custon_input_file}> <Upload size={16} />Selecionar</label>
                        <input
                            id="input-file"
                            name='image'
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className={style.container_choose_size}>
                        <label htmlFor="">Selecione o tamanho para o qual deseja redimensionar a imagem</label>
                        {errorSize && (
                            <p className={style.error_size}>Por favor selecione um tamanho!</p>
                        )}
                        <div className={style.container_size}>
                            {sizes.map((size, index) => (
                                <Option key={index} size={size} />
                            ))}
                        </div>
                    </div>
                    <input className={style.input_submit} type='submit' value={"Redimensionar"} />
                </form>
            </main>
            <Footer />
        </>
    )
}