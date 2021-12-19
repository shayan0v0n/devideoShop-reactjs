import React from 'react';
import './App.scss'
import { Route, Routes } from 'react-router';
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import Home from './containers/home/Home';
import About from './containers/about/About'
import Blog from './containers/blog/Blog'
import Post from './containers/post/Post';
import Teachers from './containers/teachers/Teachers';

const App = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Post />} />
                <Route path="/teachers" element={<Teachers />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;