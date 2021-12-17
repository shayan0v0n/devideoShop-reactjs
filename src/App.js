import React from 'react';
import './App.scss'
import { Route, Routes } from 'react-router';
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import Home from './containers/home/Home';
import About from './containers/about/About'

const App = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;