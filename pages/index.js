
import Head from 'next/head'
import Image from 'next/image'
import Candidates from '../components/Candidates'
import Faq from '../components/Faq'
import Feedback from '../components/Feedback'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (

    <div className=''>
      <Head>
        <title>Films And Music Society- SAC</title>
        <meta name="description" content="Campaigning for films and music society for the student activity center , NITR." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Candidates />
      <Feedback />
      <Faq />
    </div>
  )
}
