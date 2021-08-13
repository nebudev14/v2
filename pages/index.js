import Head from 'next/head';
import landingStyles from '../styles/Landing.module.css';
import {fetchWebringData } from 'react-hackclub-webring';

export default function Landing ({ left, right }) {
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
            A <span className="primary">high schooler</span> with a passion for <span className="secondary">programming</span> and a strong addiction to learning new things!
          </h2>
          <div id="webring-wrapper" className={landingStyles.webringWrapper}>
            <a href={left} id="previousBtn" class={landingStyles.webringAnchor} title="Previous">‹</a>
            <a href="https://webring.hackclub.com/" class={landingStyles.webringLogo} title="Hack Club Webring" alt="Hack Club Webring"></a>
            <a href={right} id="nextBtn" class={landingStyles.webringAnchor} title="Next">›</a>
          </div>
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
            <a href="https://www.linkedin.com/in/warren-yun-240984216/" target="_blank">
                <img src="/linkedin.svg" className={landingStyles.logo} title="Linkedin" alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        
        .primary {
          color: var(--primary-color);
        }

        .secondary {
          color: var(--secondary-color);
        }

      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  // this code is from hack club, check it out at https://webring.hackclub.com/public/embed.min.js
  var k = 'https://nebu.codes/',
  f = 0, c = 0, d = 0,
  l = '',
  m = '',
  b = await fetchWebringData();

  for(var a = b, e = 0; e < a.length; e++)
    if(k == a[e].url.toLowerCase()) {
      f = e;
      break;
    }
    c = f-1; 
    -1 == c && (c=a.length-1);
    l = a[c].url;d=f+1;
    d == a.length && (d=0);
    m = a[d].url;

  return {
    props: { 
      left: l,
      right: m
    }
  };
}
