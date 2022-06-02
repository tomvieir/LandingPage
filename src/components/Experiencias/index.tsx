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
                    year="2019" title="Desenvolvimento front-end"
                    description="Desenvolvimento de aplicações web responsivos e acessíveis
                com JS Vanilla, css, sass e scss."
                />

                <ExperienciaItem              
                    year="2020" title="ReactJS"
                    description="Desenvolvimento de aplicações web com ReactJS
                e Styled-Components."
                />

                <ExperienciaItem
                    year="2020" title="NextJS"
                    description="Desenvolvimento de web com NextjS, aproveitando 
                    o melhor que a FW oferece na questão de aplicações serverless."
                 />

                <ExperienciaItem
                    year="2021" title=" TDD Jest e Testing Library"
                    description="Aplicação de testes unitários com Jest." 
                />

                <ExperienciaItem
                    year="2020" title=" Material UI e ChakraUI"
                    description="Implementação de componentes de interface." 
                />

                <ExperienciaItem    
                    year="2020" title=" Typescript "
                    description="Javascript com tipagem para melhor construção das aplicações."
                />

                <ExperienciaItem    
                    year="2018" title=" Python "
                    description="Análise de dados e automação de tarefas"
                />

                

            </section>

        </div>
    )
}