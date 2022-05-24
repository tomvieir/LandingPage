import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3, DiSass, DiJavascript1, DiReact, DiPython} from 'react-icons/di';
import {SiTypescript, SiNextdotjs, SiMaterialui, SiStyledcomponents } from 'react-icons/si';
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
                <div className={styles.item}>
                    <strong>html</strong>
                    <AiFillHtml5/>
                </div>

                <div className={styles.item}>
                    <strong>Css</strong>
                    <DiCss3/>
                </div>

                <div className={styles.item}>
                    <strong>SASS</strong>
                    <DiSass/>
                </div>

                <div className={styles.item}>
                    <strong>Javascript</strong>
                    <DiJavascript1/>
                </div>

                <div className={styles.item}>
                    <strong>Typescript</strong>
                    <SiTypescript/>
                </div>

                <div className={styles.item}>
                    <strong>ReactJs</strong>
                    <DiReact/>
                </div>

                <div className={styles.item}>
                    <strong>NextJs</strong>
                    <SiNextdotjs/>
                </div>

                <div className={styles.item}>
                    <strong>Bootstrap</strong>
                    <BsFillBootstrapFill/>
                </div>

                <div className={styles.item}>
                    <strong>MaterialUi</strong>
                    <SiMaterialui/>
                </div>

                <div className={styles.item}>
                    <strong>Styled-Components</strong>
                    <SiStyledcomponents/>
                </div>

                <div className={styles.item}>
                    <strong>Python</strong>
                    <DiPython/>
                </div>
            </div>

        </div>
    )
}