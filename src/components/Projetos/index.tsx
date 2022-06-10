
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import ProjetoItem from "./ProjetoItem";
import styles from './Projetos.module.scss';


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
                    <ProjetoItem key={projeto.type}  
                        img={projeto.img}
                        title={projeto.title}
                        type={projeto.type}
                        link={projeto.link} />
                ))}
            </section>

            <button type="button">
                <Link href="https://github.com/tomvieir?tab=repositories">
                    <a target='_blank'>Ver todos os projetos </a>
                </Link>
            </button>
        </div>
    )
}

