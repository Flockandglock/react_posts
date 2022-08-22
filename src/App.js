import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import AppRouter from './components/appRouter/AppRouter';



import './App.css';


function App() {


    return (
        <Router>
            <NavBar/>
            <AppRouter/>
        </Router>
    );
}

export default App;
