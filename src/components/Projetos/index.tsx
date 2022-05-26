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
        <div className={styles.container}>
            <div className={styles.title}>
                <SectionTitle title='#Ultimos ptojetos' description='' />
            </div>

            <section>
                <ProjetoItem
                    key='##'
                    img='./../../personimg.jpg'
                    title='projeto 1'
                    type='Webpage'
                    slug='##'
                />
                <ProjetoItem
                    key='##'
                    img='./../../personimg.jpg'
                    title='projeto 1'
                    type='WebApp'
                    slug='##'
                />
                <ProjetoItem
                    key='##'
                    img='./../../personimg.jpg'
                    title='projeto 1'
                    type='##'
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