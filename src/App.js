import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import AppRouter from './components/appRouter/AppRouter';
import { AuthContext } from './context';
import { useState, useEffect } from 'react';



import './App.css';


function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
            setIsLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
            <Router>
                <NavBar/>
                <AppRouter/>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
