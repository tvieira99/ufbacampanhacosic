import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header/header';
import FirstCard from '../components/firstCard/firstCard';
import SecondCard from '../components/secondCard/secondCard'

export default function Home() {
  return (
    <>
    <Header />
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FirstCard />
        <SecondCard />
      </div>
    </>
  )
}
