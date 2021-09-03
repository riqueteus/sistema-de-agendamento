import Head from 'next/head';
import { Hello } from '../components/Hello';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Agendamento FCamara</title>
        <Hello />
      </Head>
    </>
  )
}
