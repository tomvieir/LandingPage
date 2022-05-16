import styles from './SectionTitle.module.scss'

interface SectionTitleProps { 
    title: string;
    description: string;
}

export default function SectionTitle( { title, description }: SectionTitleProps ) {
    return (
        <div className={styles.container}>
            <strong>{title}</strong>
            <h2>{description}</h2>
        </div>
    )

}