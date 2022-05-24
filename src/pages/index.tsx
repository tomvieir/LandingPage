import type { NextPage } from 'next'
import Head from 'next/head'
import Conhecimentos from '../components/Conhecimentos'
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
      <Projetos projetos={[]} /> 
      <Conhecimentos />
      
    </div>
  )
}

export default Home

//props do projetos temporario