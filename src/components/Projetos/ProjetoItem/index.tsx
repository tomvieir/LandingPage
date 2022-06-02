import Link from "next/link";
import ButtonLearnMore from "../../ButtonLearnMore";
import styles from './ProjetoItem.module.scss';

interface ProjetoProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjetoItem({ title, type, slug, img }: ProjetoProps) {
  return (
    <div className={styles.container}>

      <section>
        <div className={styles.imgWrapper} data-aos="zoom-in">
          <img src={img} alt="img"  />
        </div>
        
        <div className={styles.text} data-aos="zoom-out">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button" data-aos="fade-up">
        <Link href={`/projetos/${slug}`}>
          <a>
            <ButtonLearnMore />
          </a>
        </Link>
      </button>

    </div>
  );
}