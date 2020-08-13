import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import About from './components/about/About';
import Dashboard from './components/dashboard/Dashboard';
import Articles from './components/articles/Articles';
import Login from './components/login/Login';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/articles' component={Articles} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Footer />
        </BrowserRouter>

    );
}

export default App;
