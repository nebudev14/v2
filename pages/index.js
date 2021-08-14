import Head from 'next/head';
import landingStyles from '../styles/Landing.module.css';
import { fetchWebringData } from 'react-hackclub-webring';

import Social from '../components/Social';

export default function Landing ({ left, right }) {
  return (
    <div>
      <Head> 
        <title>warren yun</title>
      </Head>
      <div className={landingStyles.container}>
      
        <div className={landingStyles.content}>
          <div className={landingStyles.openingDiv}>
            <h1 className={landingStyles.title}>
              <span className={landingStyles.firstName}>warren </span> 
              <span className={landingStyles.lastName}>yun.</span> 
            </h1>
            <h2 className={landingStyles.text}>
              A <span className="primary">high schooler</span> with a passion for <span className="secondary">programming</span> and a strong addiction to learning new things!
            </h2>

            <h2 className={landingStyles.text}>
              I'm a <span className="primary">15-year-old developer</span> from New York. <span className="secondary">I like to write code, </span>learn about the brain, and everything in between! I mainly focus on <span className="primary">web development,</span> and in my free time I like to <span className="secondary">skateboard</span> and <span className="secondary">watch superhero movies.</span>
            </h2>

            <div id="webring-wrapper" className={landingStyles.webringWrapper}>
              <a href={left} id="previousBtn" class={landingStyles.webringAnchor} title="Previous">‹</a>
              <a href="https://webring.hackclub.com/" class={landingStyles.webringLogo} title="Hack Club Webring" alt="Hack Club Webring"></a>
              <a href={right} id="nextBtn" class={landingStyles.webringAnchor} title="Next">›</a>
            </div>
          </div>

          <div className={landingStyles.socialDiv}>
            <img src="/warren.png" alt="warren" className={landingStyles.pfp} />
            <Social />
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
