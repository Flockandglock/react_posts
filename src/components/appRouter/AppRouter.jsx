import { BrowserRouter as Router, Switch, Route, Link, Routes, Navigate } from 'react-router-dom';
import NotFound404 from '../../components/UI/404/NotFound404';
import { publicRoutes, priveteRoutes } from '../../router';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import Loader from '../UI/loader/Loader';


const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return (
        <Routes>
            {
                isAuth ?
                priveteRoutes.map(route => 
                <Route key={route.path} path={route.path} element={<route.component/>} />    
                )
                :
                publicRoutes.map(route => 
                <Route key={route.path} path={route.path} element={<route.component/>} />    
                )
            }
            {
                isAuth ?
                <Route path='/*' element={<Navigate to='/posts' replace />} />
                :
                <Route path='/*' element={<Navigate to='/login' replace />} />
            }
        </Routes>  
        )
}
export default AppRouter;



{/* <Route path='/*' element={<NotFound404/>}/>
<Route path='/' element={<About/>}/> 
<Route path='/*' element={<Navigate to='/posts' replace />} />
*/}









