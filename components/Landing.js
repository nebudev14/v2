import landingStyles from '../styles/Landing.module.css';

const Landing = () => {
    
    return (
        <div className={landingStyles.container}>
            <span className={landingStyles.title}>
                <span className={landingStyles.firstName}>warren</span> yun
                <div className={landingStyles.socialMediaWrapper}>
                    <a href="https://webring.hackclub.com/">
                        <img src="/instagram.png" className={landingStyles.logo} />
                    </a>
                    <a href="https://webring.hackclub.com/">
                        <img src="/twitter.png" className={landingStyles.logo} />
                    </a>
                    <a href="https://webring.hackclub.com/">
                        <img src="/github.png" className={landingStyles.logo} />
                    </a>
              </div>
            </span>
            
        </div>
    );
}

export default Landing;