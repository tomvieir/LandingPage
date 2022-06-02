import styles from './Drawer.module.scss'
import { useState } from 'react'
import Link from 'next/link'


export default function Drawer() {
    const [open, setOpen] = useState(false)
    const toggleMode = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.drawer}>
            <div className={open ? styles.iconActive : 'icon'} onClick={toggleMode}>
                <div className={styles.hamburgerIcon}>
                    <div className={styles.hamburgerLine1}></div>
                    <div className={styles.hamburgerLine2}></div>
                    <div className={styles.hamburgerLine3}></div>
                </div>

                <aside>
                    <nav>
                        <ul>
                            <li>
                                <Link href=''>
                                    <a>HOME</a>
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    <a>PROJETOS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    <a>COMPETÊNCIAS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    <a>CONHECIMENTOS</a>
                                </Link>
                            </li>
                            <li>
                                <Link href=''>
                                    <a>CONTATOS</a>
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    <div className={styles.contactContainer}>
                        <strong className={styles.title}>TELEFONES</strong>
                        <strong>+55 (62)99924-8225</strong>
                        <strong className={styles.title}>E-MAIL</strong>
                        <strong>wevertonbvieira@gmail.com</strong>
                    </div>
                </aside>
            </div>
        </div>

    )
}