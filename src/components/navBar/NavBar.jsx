import { Link } from "react-router-dom";

import classes from './navbar.module.css';

const NavBar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link to="/about">О сайте</Link> /
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default NavBar;