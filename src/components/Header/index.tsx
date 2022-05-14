import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'

export default function Header() {
    const { asPath } = useRouter()
    return (
        <header className={styles.headerContainer} >
            <div className={styles.headerContent}>
                <nav>
                    <Link href='/' >
                    <a className = {asPath === '/' ? styles.active : ''}>Home</a>
                        
                    </Link>

                    <Link href="" >
                        <a className = {asPath === '/projetos' ? styles.active : ''}>Projetos</a>
                    </Link>

                    <Link href='' >
                        <a>Experiência</a>
                    </Link>

                    <Link href="" >
                        <a>Sobre mim</a>
                    </Link>

                    <Link href="" >
                        <a>Contato</a>
                    </Link>

                    <Link href="" >
                        <a>Conhecimentos</a>
                    </Link>

                </nav>


            </div>
        </header>)


}