import Head from 'next/head';
import { SignIn } from '../components/SignIn/SignIn';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Agendamento FCamara</title>
      </Head>

      <main className={styles.main}>

        <SignIn />

      </main>

    </>
  )
}
