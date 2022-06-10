import { GetStaticProps } from "next";
import Link from "next/link";
import { getPrismicClient } from "../../services/prismic";
import SectionTitle from "../SectionTitle";
import ProjetoItem from "./ProjetoItem";
import styles from './Projetos.module.scss';
import Prismic from '@prismicio/client';
import RichText from '@prismicio/helpers'


interface iprojetos {
    title: string;
    type: string;
    link: string;
    img: string;
}

interface ProjetosProps {
    projetos: iprojetos[];
}

export default function Projetos({ projetos }: ProjetosProps) {
  
    return (
        <div className={styles.container} id='projetos'>
            <div className={styles.title}>
                <SectionTitle title='#Ultimos ptojetos' description='' />
            </div>

            <section>
                
                {projetos.map(projeto => (
                    <ProjetoItem
                        img={projeto.img}
                        title={projeto.title}
                        type={projeto.type}
                        link={projeto.link} />
                ))}

                {/* <ProjetoItem
                    key='##'
                    img='imgProject/wallet.png'
                    title='Wallet'
                    type='Controle financeiro'
                    link=''
                  
                />
                <ProjetoItem
                    key='##'
                    img='imgProject/appnews.png'
                    title='App News'
                    type='WebApp'
                    link=''
              
                />
                <ProjetoItem
                    key='##'
                    img='imgProject/landig.png'
                    title='Pagina Pessoal'
                    type='Landing Page'
                    link=''
             
                />
                <ProjetoItem
                    key='##'
                    img='imgProject/renee.png'
                    title='Pagina comercial'
                    type='Landing Page'
                    link=''
                   
                /> */}

            </section>

            <button type="button">
                <Link href="/projetos">
                    <a>Ver todos os projetos </a>
                </Link>
            </button>


        </div>
    )
}

