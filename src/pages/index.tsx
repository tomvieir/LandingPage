import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Experiencias from '../components/Experiencias'
import Homehero from '../components/Homehero'
import Projetos from '../components/Projetos'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home</title>
      </Head>

      <Homehero />
      <Experiencias />
      <Projetos />
      
    </div>
  )
}

export default Home
