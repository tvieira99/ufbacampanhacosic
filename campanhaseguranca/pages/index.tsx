import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles'
import Header from '../components/Header/header';
const styles = makeStyles({
  background: {
    background: '#700205'
  },
  text: {
    fontSize: 'xx-large'
  }
});

export default function Home() {
  const style = styles();
  return (
    <>
    <Header />
      <div className={style.background}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={style.text}>Hello World</div>
      </div>
    </>
  )
}
