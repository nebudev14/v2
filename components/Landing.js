import landingStyles from '../styles/Landing.module.css';

const Landing = () => {
    
    return (
        <div className={landingStyles.container}>
            <div>
                <h1 className={landingStyles.title}>
                    <span className={landingStyles.firstName}>warren</span> yun 
                </h1>
                <h2 className={landingStyles.text}>
                    15 year old coding addict
                </h2>
            </div>
            <div className={landingStyles.socialMediaWrapper}>
                <a href="https://www.instagram.com/nebudev14/" target="_blank">
                    <img src="/instagram.png" className={landingStyles.logo} />
                </a>
                <a href="https://twitter.com/nebudev14" target="_blank">
                    <img src="/twitter.png" className={landingStyles.logo} />
                </a>
                <a href="https://github.com/NebuDev14" target="_blank">
                    <img src="/github.png" className={landingStyles.logo} />
                </a>
            </div>
        </div>
    );
}

export default Landing;