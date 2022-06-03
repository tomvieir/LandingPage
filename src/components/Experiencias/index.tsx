import SectionTitle from '../SectionTitle'
import ExperienciaItem from './ExperienciaItem'
import styles from './Experiencias.module.scss'

export default function Experiencias() {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <SectionTitle title="Competências" description="#04 anos" />
            </div>

            <section className={styles.itemContainer}>
                <ExperienciaItem
                    year="2020" title="ReactJS"
                    description="Desenvolvimento de aplicações web com ReactJS
                e Styled-Components, APIs REST e Typescript, CHAKRA UI."
                />

                <ExperienciaItem
                    year="2020" title="NextJS"
                    description="Desenvolvimento de web com NextjS, aproveitando 
                    o melhor que a FW oferece na questão de aplicações com back-end
                    próprio e seguro, integrações com CMS, fluxo de autenticação e otimização."
                />

                <ExperienciaItem
                    year="2020" title=" Javascript & Typescript "
                    description="Experiência com Javascript Vanilla ou Ttpescript para melhor construção das aplicações
                    e mais manutenções mais fáceis."
                />

                <ExperienciaItem
                    year="2020" title=" Material UI "
                    description="Experiência com Material UI para melhor construção das aplicações e otimização do tempo de desenvolvimento."
                />

                <ExperienciaItem
                    year="2018" title=" Python "
                    description="Experiência com Pandas, Numpy, Matplotlib, Django, Flask, PySimpleGUI e PyAutoGUI."
                />



            </section>

        </div>
    )
}