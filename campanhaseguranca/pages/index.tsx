import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header/header';
import FirstCardMobile from '../components/firstCard/firstCard';
import SecondCardMobile from '../components/secondCard/secondCard';
import Hidden from '@material-ui/core/Hidden';

export default function Home() {
  return (
    <>
      <div>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <FirstCardMobile />
          <SecondCardMobile />
          <Header />
      </div>
    </>
  )
}
