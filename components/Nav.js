import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav>
            <ul className={navStyles.navList}>
                <li className={navStyles.navElement}>
                    <a href="/projects">projects</a>
                </li>
                <li className={navStyles.navElement}>
                    <a href="https://scrapbook.hackclub.com/WarrenYun/">scrapbook</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;