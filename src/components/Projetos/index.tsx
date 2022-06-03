import Link from "next/link";
import SectionTitle from "../SectionTitle";
import ProjetoItem from "./ProjetoItem";
import styles from './Projetos.module.scss';


interface IProjeto {
    slug: string;
    title: string;
    type: string;
    description: string;
    link: string;
    thumbnail: string;
}

interface ProjetosProps {
    projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetosProps) {
    return (
        <div className={styles.container} id='projetos'>
            <div className={styles.title}>
                <SectionTitle title='#Ultimos ptojetos' description='' />
            </div>

            <section>
                <ProjetoItem
                    key='##'
                    img='imgProject/wallet.png'
                    title='Wallet'
                    type='Controle financeiro'
                    slug='##'
                />
                <ProjetoItem
                    key='##'
                    img='imgProject/appnews.png'
                    title='App News'
                    type='WebApp'
                    slug='##'
                />
                <ProjetoItem
                    key='##'
                    img='imgProject/landig.png'
                    title='Pagina Pessoal'
                    type='Landing Page'
                    slug='##'
                />
                <ProjetoItem
                    key='##'
                    img='imgProject/renee.png'
                    title='Pagina comercial'
                    type='Landing Page'
                    slug='##'
                />
                
            </section>

            <button type="button">
                <Link href="/projetos">
                    <a>Ver todos os projetos </a>
                </Link>
            </button>


        </div>
    )
}