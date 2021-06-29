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
            </div>
            <div className={landingStyles.socialMediaWrapper}>
                <a href="https://www.instagram.com/nebudev14/" target="_blank">
                    <img src="/instagram.svg" className={landingStyles.logo} />
                </a>
                <a href="https://twitter.com/nebudev14" target="_blank">
                    <img src="/twitter.svg" className={landingStyles.logo} />
                </a>
                <a href="https://github.com/NebuDev14" target="_blank">
                    <img src="/github.svg" className={landingStyles.logo} />
                </a>
            </div>
        </div>
    );
}

export default Landing;