import Link from "next/link";
import SectionTitle from "../SectionTitle";
import styles from './Projetos.module.scss';


export default function Projetos() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <SectionTitle title='#Ultimos ptojetos' description='' />
            </div>
            <section>
        
          
       
            </section>
            <button type="button">
                <Link href="/projetos">
                <a>Ver todos os projetos</a>
                </Link>
            </button>


        </div>
    )
}