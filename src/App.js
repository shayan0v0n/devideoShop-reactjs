import React from 'react';
import { Route, Routes } from 'react-router';
import Navigation from './containers/navigation/Navigation'
import Footer from './containers/footer/Footer'
import Home from './containers/home/Home';
import About from './containers/about/About'
import Blog from './containers/blog/Blog'
import Post from './containers/post/Post';
import Teachers from './containers/teachers/Teachers';
import PhpCourse from './containers/coursePages/phpCourse/PhpCourse';
import LaravelCourse from './containers/coursePages/laravelCourse/LaravelCourse';
import ReactjsCourse from './containers/coursePages/reactjsCourse/ReactjsCourse';
import JavascriptCourse from './containers/coursePages/javascriptCourse/JavascriptCourse';
import DetailCourse from './containers/detailCourse/DetailCourse';
import Dashboard from './containers/dashboard/Dashboard'

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
                <Route path="/skills/php" element={<PhpCourse />} />
                <Route path="/skills/laravel" element={<LaravelCourse />} />
                <Route path="/skills/reactjs" element={<ReactjsCourse />} />
                <Route path="/skills/javascript" element={<JavascriptCourse />} />
                <Route path="/skills/javascript/:0" element={<DetailCourse />} />
                <Route path="/skills/laravel/:3" element={<DetailCourse />} />
                <Route path="/skills/reactjs/:1" element={<DetailCourse />} />
                <Route path="/skills/php/:2" element={<DetailCourse />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;