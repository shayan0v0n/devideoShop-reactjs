import React from 'react';
import './App.scss'
import { Route, Routes } from 'react-router';
import Navigation from './components/navigation/Navigation'
import Home from './containers/home/Home';

const App = () => {
    return (
        <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            <footer>

            </footer>
        </div>
    )
}

export default App;