import SectionTitle from '../SectionTitle'
import ExperienciaItem from './ExperienciaItem'
import styles from './Experiencias.module.scss'

export default function Experiencias() {
    return (
        <div className={styles.container}>
            <SectionTitle title="Experiência" description="#04 anos" />
            <section className={styles.itemContainer}>
                <ExperienciaItem year="2020" title="Desenvolvedor Fullstack" description="Desenvolvimento de aplicações web e mobile." />
                <ExperienciaItem year="2020" title="Desenvolvedor Fullstack" description="Desenvolvimento de aplicações web e mobile." />
                <ExperienciaItem year="2020" title="Desenvolvedor Fullstack" description="Desenvolvimento de aplicações web e mobile." />
                <ExperienciaItem year="2020" title="Desenvolvedor Fullstack" description="Desenvolvimento de aplicações web e mobile." />
            </section>

        </div>
    )
}