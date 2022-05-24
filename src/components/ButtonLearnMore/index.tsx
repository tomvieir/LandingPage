import styles from './Button.module.scss';

export default function ButtonLearnMore() {
    return (

        <div className={styles.LearnMore}>
            <span className={styles.circle} >
                <span className={styles.IconArrow}></span>
            </span>
            <span className={styles.ButtonText}>Saiba mais</span>
        </div>
    )
}