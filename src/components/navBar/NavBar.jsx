import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import MyButton from "../UI/button/MyButton";
import { useContext } from "react";

import classes from './navbar.module.css';

const NavBar = () => {

    const {setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={classes.navbar}>
            <MyButton onClick={logout}>Выйти</MyButton>
            <div className={classes.navbar__links}>
                <Link to="/about">О сайте</Link> /
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};

export default NavBar;