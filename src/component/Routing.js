import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Post from './Post';
import Header from './Header';
import Footer from './Footer';
import PostDetails from './postDetails';
import Main from './Main'


const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route index element={<Home />} />
                    <Route path='Home' element={<Home />} />
                    <Route path='Profile' element={<Profile />} />
                    <Route path='Post' element={<Post />} />
                    <Route path='Post/:topic' element={<PostDetails />} />
                    <Route />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;