import landingStyles from '../styles/Landing.module.css';

const Landing = () => {
    
    return (
        <div className={landingStyles.container}>
            <div className={landingStyles.openingDiv}>
                <h1 className={landingStyles.title}>
                    <span className={landingStyles.firstName}>warren </span> 
                    <span className={landingStyles.lastName}>yun.</span> 
                </h1>
                <h2 className={landingStyles.text}>
                    a high schooler with a passion for programming and a strong addiction to learning new things
                </h2>
                <div id="webring-wrapper" className={landingStyles.webringWrapper}>
                    <a href="https://webring.hackclub.com/" id="previousBtn" class={landingStyles.webringAnchor} title="Previous">‹</a>
                    <a href="https://webring.hackclub.com/" class={landingStyles.webringLogo} title="Hack Club Webring" alt="Hack Club Webring"></a>
                    <a href="https://webring.hackclub.com/" id="nextBtn" class={landingStyles.webringAnchor} title="Next">›</a>
                    <script src="https://webring.hackclub.com/public/embed.min.js"></script>
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
                </div>
            </div>
        </div>
    );
}

export default Landing;