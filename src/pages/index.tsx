import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import Conhecimentos from '../components/Conhecimentos'
import Contato from '../components/Contato'
import Drawer from '../components/Drawer'
import Experiencias from '../components/Experiencias'
import Homehero from '../components/Homehero'
import Projetos from '../components/Projetos'
import styles from '../styles/Home.module.scss'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Header from '../components/Header'
import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client';


interface iprojetos {
  title: string;
  type: string;
  link: string;
  img: string;
}

interface HomeProps {
  projetos: iprojetos[];
}

export default function Home({ projetos }: HomeProps) {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <Header />

      <main>
        <Drawer />
        <Homehero />
        <Experiencias />
        <Projetos projetos={projetos} /> 
        <Conhecimentos />
        <Contato />
      </main>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
 
  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projects')],
    {
      orderings: '[document.first_publication_date desc]'
    }
  );

  const projetos = response.results.map(projeto => ({
    title: projeto.data.title.find((content: { type: string; }) => content.type === 'paragraph')?.text ?? '',
    type: projeto.data.type.find((content: { type: string; }) => content.type === 'paragraph')?.text ?? '',
    link: projeto.data.link.url ?? '',
    img: projeto.data.img.url ?? '',
  }))

  // console.log(projetos)

  return {
    props: {
      projetos
    },
    revalidate: 86400

  }
}



//props do projetos temporario