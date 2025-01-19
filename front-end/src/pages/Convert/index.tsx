import style from './index.module.css';
import { useState } from 'react';
import { Upload } from 'lucide-react';

//Components
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Option } from './_components/Option';

export function Convert() {
    const image_types = ["PNG", "JPG", "SVG", "WEBP", "ICO", "JPEG",
        "HDR", "BMP", "GIF", "AVIF", "RGB", "TIFF", "PSD", "TGA"];
    const [imageError, setImageError] = useState(false);
    const [errorType, setErrorType] = useState(false);
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

        if (!form.convert_to.value) {
            setErrorType(true);
            setTimeout(() => {
                setErrorType(false);
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
        // const responseData = response.json();

        console.log("Requisição enviada!");
    }
    return (
        <>
            <NavBar />
            <main className={style.main}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.container_choose_image}>
                        <label>Selecione uma imagem do seu dispositivo para iniciar a conversão</label>
                        {fileName && (
                            <p>{fileName}</p>
                        )}
                        {imageError && (
                            <p className={style.image_error_msg}>Por favor selecione uma imagem!</p>
                        )}
                        <label htmlFor="input-file" className={style.custon_input_file}><Upload size={16} />Selecionar</label>
                        <input
                            id="input-file"
                            name='image'
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className={style.container_choose_type}>
                        <label htmlFor="">Selecione o formato para o qual deseja converter a imagem</label>
                        {errorType && (
                            <p className={style.error_type}>Por favor selecione um tipo!</p>
                        )}
                        <div className={style.container_types}>
                            {image_types.map((image_type, index) => (
                                <Option key={index} name={image_type} />
                            ))}
                        </div>
                    </div>
                    <input className={style.input_submit} type='submit' value={"Converter"} />
                </form>
            </main>
            <Footer />
        </>
    )
}