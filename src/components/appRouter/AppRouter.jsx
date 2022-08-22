import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import NotFound404 from '../../components/UI/404/NotFound404';
import About from '../../pages/About';
import Posts from '../../pages/Posts';
import PostIdPage from '../../pages/PostIdPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<NotFound404/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/' element={<About/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/posts/:id' element={<PostIdPage/>}/>
        </Routes>
    );
};

export default AppRouter;