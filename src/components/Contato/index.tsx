import SectionTitle from "../SectionTitle";
import { BsFillTelephoneForwardFill, BsTelegram } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import swal from 'sweetalert';

import styles from './Contato.module.scss';
import { useCallback, useState } from "react";

export default function Contato() {

    const [characterCount, setCharacterCount] = useState(0);

    const value = characterCount > 0 ? false : true

    const handleCharacter = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const len = event.target.value.length;
        setCharacterCount(len); 
    }
    , []);

    const handleSwal = () => {
        swal({
            text: "Desculpe, no momento não estou recebendo projetos.",
        });
    }

    return (
        <div className={styles.container} id='contatos'>
            <SectionTitle
                title="Precisa dos meus serviços?"
                description="Preencha o formulário abaixo e entrarei em contato em breve! :)"
            />

            <div className={styles.formContainer}>
                <form >
                    <div className={styles.formGroup}  >
                        <input type="text" id="nome" placeholder="Nome" required />
                        <input type="email" id="email" placeholder="E-mail" required />
                    </div>
                    <textarea id="mensagem" placeholder="Mensagem" onChange={handleCharacter} />
                    <p>{characterCount}</p>
                </form>
                <button type="button" disabled={value} onClick={handleSwal} >
                    <a>Enviar </a>
                </button>
            </div>

            <div className={styles.contactContainer}>

                <div className={styles.sectionTitle}>
                    <SectionTitle
                        title="Ou"
                        description="Entre em contato pelos canais a seguir"
                    />
                </div>


                <div className={styles.itemContainer}>

                    <div className={styles.item} data-aos='fade-up' >

                        <a href="https://api.whatsapp.com/send/?phone=5562999248225&text&app_absent=0"><IoLogoWhatsapp /></a>
                    </div>
                    <div className={styles.item} data-aos='fade-up' data-aos-delay='300'>
                        <a href="https://t.me/tomvieir"><BsTelegram /></a>

                    </div>
                    <div className={styles.item} data-aos='fade-up' data-aos-delay='600'>
                        <a href="tel:+5562999248225"><BsFillTelephoneForwardFill /></a>
                    </div>


                </div>


            </div>
        </div>

    )
}