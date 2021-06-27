import Head from 'next/head';
import Landing from '../components/Landing';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head> 
        <title>warren yun</title>
      </Head>
      <Landing />
      <Nav />
    </div>
  )
}
