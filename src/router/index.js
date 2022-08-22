import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import NotFound404 from "../components/UI/404/NotFound404";

export const routes = [
    {path: '/about', component: <About />,},
    {path: '/posts', component: <Posts />},
    {path: '/posts/:id', component: <PostIdPage />},
];