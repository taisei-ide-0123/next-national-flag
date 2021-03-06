import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import SearchEngine from '../components/SearchEngine'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ntional Flag App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <SearchEngine />
      </main>
    </div>
  )
}
