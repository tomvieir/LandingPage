import SectionTitle from "../SectionTitle";
import { BsFillTelephoneForwardFill, BsTelegram } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import styles from './Contato.module.scss';

export default function Contato() {
    return (
        <div className={styles.container}>
            <SectionTitle
                title="Precisa dos meus serviços?"
                description="Preencha o formulário abaixo e entrarei em contato em breve! :)"
            />

            <div className={styles.formContainer}>
                <form>
                    <div className={styles.formGroup}>
                        <input type="text" id="nome" placeholder="Nome" />
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <textarea id="mensagem" placeholder="Mensagem" />
                </form>

                <button type="button">
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
                    <div className={styles.item} data-aos='fade-up'data-aos-delay='300'>
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