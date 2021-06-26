import landingStyles from '../styles/Landing.module.css';

const Landing = () => {
    return (
        <div className={landingStyles.container}>
            <div className={landingStyles.titleDiv}>
                <div className={landingStyles.title}>
                    <strong>
                        <span className={landingStyles.firstName}>warren</span> yun
                    </strong>
                </div>
                <div>
                    <img src="/warren.png" alt="image of warren" />
                </div>
            </div>
        </div>
    );
}

export default Landing;