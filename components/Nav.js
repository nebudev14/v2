import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (        
        <ul className={navStyles.navList}>
            <li className={navStyles.navElement}>
                <a href="/projects" className={navStyles.link}>projects</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="https://scrapbook.hackclub.com/WarrenYun/" className={navStyles.link} target="_blank">scrapbook</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="/" className={navStyles.link}>home</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="/blog" className={navStyles.link}>blog</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="https://www.polywork.com/nebudev14" className={navStyles.link} target="_blank">timeline</a>
            </li>
        </ul>
        
    );
}

export default Nav;