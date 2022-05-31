import Link from 'next/link';
import styles from './Footer.module.scss';
import { BsLinkedin, BsGithub, BsInstagram, BsArrowUp } from 'react-icons/bs';
export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.scrollTop}>
                        <a href="">
                            <p>
                                <BsArrowUp />
                                Voltar ao topo
                            </p>
                        </a>
                    </div>
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.social}>
                        <a href="" className={styles.linkedin}>
                            <div className={styles.icon}><BsLinkedin /></div>

                        </a>

                        <a href="" className={styles.github}>
                            <div className={styles.icon}><BsGithub /></div>

                        </a>

                        <a href="" className={styles.instagram}>
                            <div className={styles.icon}><BsInstagram /></div>

                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}