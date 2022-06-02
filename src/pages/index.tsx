import type { NextPage } from 'next'
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

const Home: NextPage = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Drawer />
        <Homehero />
        <Experiencias />
        <Projetos projetos={[]} />
        <Conhecimentos />
        <Contato />
      </main>
    </div>
  )
}

export default Home

//props do projetos temporario