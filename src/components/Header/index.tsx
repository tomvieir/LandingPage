import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {

    return (
        <div className={styles.headerContainer} >
            <div className={styles.headerContent}>
                <nav>
                    
                    <Link href='#home' >
                        <a>Home</a>
                    </Link>

                    <Link href="#conhecimentos" >
                        <a>Conhecimentos</a>
                    </Link>

                    <Link href="/#projetos" >
                        <a>Projetos</a>
                    </Link>

                    <Link href='#competencias' >
                        <a>Competências</a>
                    </Link>

                    <Link href="#contatos" >
                        <a>Contato</a>
                    </Link>

                </nav>
            </div>
        </div>
    )
}