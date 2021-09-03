import Head from 'next/head';
import { SignIn } from '../components/SignIn/SignIn';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Agendamento FCamara</title>
      </Head>
      
      <SignIn />
    </>
  )
}
