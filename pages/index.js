import Head from 'next/head';
import landingStyles from '../styles/Landing.module.css';
import { HackClubWebring, fetchWebringData } from 'react-hackclub-webring';

export default function Landing({ webringData }) {
  return (
    <div>
      <Head> 
        <title>warren yun</title>
      </Head>
      <div className={landingStyles.container}>
        <div className={landingStyles.openingDiv}>
          <h1 className={landingStyles.title}>
            <span className={landingStyles.firstName}>warren </span> 
            <span className={landingStyles.lastName}>yun.</span> 
          </h1>
          <h2 className={landingStyles.text}>
            a high schooler with a passion for programming and a strong addiction to learning new things
          </h2>
          <HackClubWebring webringData={webringData} domainName='https://nebu.codes/' />
          <div className={landingStyles.socialMediaWrapper}>
            <a href="https://www.instagram.com/nebudev14/" target="_blank">
                <img src="/instagram.svg" className={landingStyles.logo} title="Instagram" alt="Instagram" />
            </a>
            <a href="https://twitter.com/nebudev14" target="_blank">
                <img src="/twitter.svg" className={landingStyles.logo} title="Twitter" alt="Twitter" />
            </a>
            <a href="https://github.com/NebuDev14" target="_blank">
                <img src="/github.svg" className={landingStyles.logo} title="GitHub" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  console.log("lmao");
  return {
    props: { webringData: await fetchWebringData() }
  }
}
