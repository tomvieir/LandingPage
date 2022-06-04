import { GetStaticProps } from "next";
import Link from "next/link";
import { createClient } from "../../services/prismic";
import SectionTitle from "../SectionTitle";
import ProjetoItem from "./ProjetoItem";
import styles from './Projetos.module.scss';
import Prismic from '@prismicio/client';


interface projects {
    title: string;
    type: string;
    link: string;
    img: string;
}

interface ProjetosProps {
    projetos: projects[];
}

export default function Projetos({ projetos }: ProjetosProps) {
    console.log(projetos);
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

            </section>

            <button type="button">
                <Link href="/projetos">
                    <a>Ver todos os projetos </a>
                </Link>
            </button>


        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = createClient()

    const response = await prismic.query<any>(
        [Prismic.Predicates.at('document.type', 'projects')], {

    })

    const projects = response.results.map((projectItem: { data: { title: any; type: any; img: any; link: any; }; }) => {
        return {

            title: projectItem.data.title,
            type: projectItem.data.type,
            img: projectItem.data.img,
            link: projectItem.data.link,

        }
    })
    console.log(JSON.stringify(projects, null, 2))
    return {
        props: {
            projects
        }
    }
}

