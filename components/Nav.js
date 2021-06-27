import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (        
        <ul className={navStyles.navList}>
            <li className={navStyles.navElement}>
                <a href="https://scrapbook.hackclub.com/WarrenYun/" className={navStyles.link} target="_blank">Scrapbook</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="/projects" className={navStyles.link}>Projects</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="/" className={navStyles.link}>Home</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="/blog" className={navStyles.link}>Blog</a>
            </li>
            <li className={navStyles.navElement}>
                <a href="https://www.polywork.com/nebudev14" className={navStyles.link} target="_blank">Timeline</a>
            </li>
        </ul>
        
    );
}

export default Nav;