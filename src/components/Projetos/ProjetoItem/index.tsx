import Link from "next/link";
import ButtonLearnMore from "../../ButtonLearnMore";
import styles from './ProjetoItem.module.scss';

interface ProjetoProps {
  title: string;
  type: string;
  img: string;
  link: string;
}

export default function ProjetoItem({ title, type, link, img }: ProjetoProps) {
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
      <button type="button"  data-aos="fade-up">
        <Link href={link}>
          <a target="_blank">
            <ButtonLearnMore />
          </a>
        </Link>
      </button>

    </div>
  );
}