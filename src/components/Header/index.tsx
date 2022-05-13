import Link from 'next/link'
import styles from './styles.module.scss'

export default function Header() {
    return (
    <header className={styles.headerContainer} >
        <div className={styles.headerContent}>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>

                <Link href="">
                    <a>Portfólio</a>
                </Link>

                       
            </nav>

          
        </div>
    </header>)
    
    
}