import landingStyles from '../styles/Landing.module.css';

const Landing = () => {
    return (
        <div className={landingStyles.container}>
            <span className={landingStyles.title}>
                <span className={landingStyles.firstName}>warren</span> yun
            </span>
        </div>
    );
}

export default Landing;