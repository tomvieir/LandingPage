import styles from './ExperienciaItem.module.scss'


interface ExperienciaItemProps {
    year: string;
    title: string;
    description: string;
}


export default function ExperienciaItem({ year, title, description }: ExperienciaItemProps) {
    return (
        <div className={styles.container}>
          <h1>{year}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
    );
}