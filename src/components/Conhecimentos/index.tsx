import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3, DiSass, DiJavascript1, DiReact, DiPython} from 'react-icons/di';
import {SiTypescript, SiNextdotjs, SiMaterialui, SiStyledcomponents, SiChakraui } from 'react-icons/si';
import {BsFillBootstrapFill} from 'react-icons/bs';
import SectionTitle from '../SectionTitle';
import styles from './Conhecimentos.module.scss';

export default function Conhecimentos() {
    return (
        <div className={styles.container}>

            <div className={styles.titleContainer}>
                <SectionTitle title="Conhecimentos" description="" />
            </div>

           
            <div className={styles.Itemscontainer}>
                <div className={styles.item} data-aos='fade-left'>
                    <strong>html</strong>
                    <AiFillHtml5/>
                </div>

                <div className={styles.item} data-aos='fade-right'>
                    <strong>Css</strong>
                    <DiCss3/>
                </div>

                <div className={styles.item} data-aos='fade-left'>
                    <strong>SASS</strong>
                    <DiSass/>
                </div>

                <div className={styles.item} data-aos='fade-right'>
                    <strong>Javascript</strong>
                    <DiJavascript1/>
                </div>

                <div className={styles.item} data-aos='fade-left'>
                    <strong>Typescript</strong>
                    <SiTypescript/>
                </div>

                <div className={styles.item} data-aos='fade-right'>
                    <strong>ReactJs</strong>
                    <DiReact/>
                </div>

                <div className={styles.item} data-aos='fade-left'>
                    <strong>NextJs</strong>
                    <SiNextdotjs/>
                </div>

                <div className={styles.item} data-aos='fade-right'>
                    <strong>Bootstrap</strong>
                    <BsFillBootstrapFill/>
                </div>

                <div className={styles.item} data-aos='fade-left'>
                    <strong>MaterialUi</strong>
                    <SiMaterialui/>
                </div>

                <div className={styles.item} data-aos='fade-right'>
                    <strong>ChakaraUI</strong>
                    <SiChakraui/>
                </div>

                <div className={styles.item} data-aos='fade-left'>
                    <strong>Styled-Components</strong>
                    <SiStyledcomponents/>
                </div>

                <div className={styles.item} data-aos='fade-right'>
                    <strong>Python</strong>
                    <DiPython/>
                </div>
            </div>

        </div>
    )
}