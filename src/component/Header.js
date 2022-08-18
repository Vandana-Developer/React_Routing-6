import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" >React- router 6</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to='/'>Home</Link></li>
                            <li><Link to='/profile'>Profile</Link></li>
                            <li><Link to='/post'>Post</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;