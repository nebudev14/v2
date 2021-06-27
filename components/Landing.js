import landingStyles from '../styles/Landing.module.css';

const Landing = () => {
    
    return (
        <div className={landingStyles.container}>
            <span className={landingStyles.title}>
                <span className={landingStyles.firstName}>warren</span> yun
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
            </span>
            
        </div>
    );
}

export default Landing;