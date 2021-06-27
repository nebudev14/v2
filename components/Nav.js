import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (        
        <ul className={navStyles.navList}>
            <li className={navStyles.navElement}>
                <a href="/projects">projects</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="https://scrapbook.hackclub.com/WarrenYun/" target="_blank">scrapbook</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="/">home</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="/blog">blog</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="https://www.polywork.com/nebudev14" target="_blank">timeline</a>
            </li>
        </ul>
        
    );
}

export default Nav;