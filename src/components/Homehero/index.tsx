import SectionTitle from '../SectionTitle'
import styles from './Homehero.module.scss'

export default function Homehero() {
    return (
        <div className={styles.container}>
            <img src='./../../personimg.jpg' alt="imagem" /> 

            <div className={styles.rightContainer}>
                <SectionTitle
                    title="Bem vindo!"
                    description="Me chamo Weverton"
                />

                <div className={styles.containerBox}>

                    <div className={styles.boxContent}>
                        <div className={styles.codeItem} data-aos="fade-left" >
                            <span className={styles.comment}>//Minha apresentação</span><br />
                            <span className={styles.obj}>Infos</span> {'\u007B'}
                            <div className={styles.blue}>
                                Nome: <span className={styles.string}>'Weverton',</span>
                            </div>
                            <div className={styles.blue}>
                                Sobrenome: <span className={styles.string}>'Vieira'</span>
                            </div>
                            <div className={styles.blue}>
                                Idade: <span className={styles.darkblue}>26</span>
                            </div>
                            {'\u007D'}
                        </div>
                        <div className={styles.codeItem} data-aos="fade-up">
                            <span className={styles.obj}>Cargo</span> {'\u007B'}
                            <div className={styles.blue}>
                                Função: <span className={styles.string}>'Dev Front-end',</span>
                            </div>
                            <div className={styles.blue}>
                                Descrição: 
                                <span className={styles.string}>
                                    "Desenvolvimento de aplicações WEB responsivos, dinâmicos e acessíveis
                                    utilizando tecnologias como React, Next, TypeScript e Styled Components"                                   
                                </span>
                            </div>
                            {'\u007D'}

                        </div>

                    </div>


                </div>
            </div>
        </div>

    )
}