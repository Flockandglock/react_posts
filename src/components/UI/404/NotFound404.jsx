import { Link } from "react-router-dom";

const NotFound404 = () => {
    return (
        <div>
            <h1>Страница не найдена</h1>
            <Link to="/posts">Вернуться к постам</Link>
        </div>
    );
};

export default NotFound404;