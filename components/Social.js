import landingStyles from '../styles/Landing.module.css';

const Social = () => {
    return (
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
    );
}

export default Social;
