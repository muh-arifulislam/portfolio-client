import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={match && { color: "blue", borderBottom: "2px solid blue" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }
    return (
        <header className='lg:mx-[50px]'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><CustomLink to='/'>Home</CustomLink></li>
                            <li><CustomLink to='/works'>Works</CustomLink></li>
                            <li><CustomLink to='/contact'>Contact</CustomLink></li>
                            <li><CustomLink to='/about'>About Me</CustomLink></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">Muh. Arif</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><CustomLink to='/'>Home</CustomLink></li>
                        <li><CustomLink to='/works'>Works</CustomLink></li>
                        <li><CustomLink to='/contact'>Contact</CustomLink></li>
                        <li><CustomLink to='/about'>About Me</CustomLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/' className="btn btn-primary shadow-xl">Lets Talk</a>
                </div>
            </div>
        </header>
    );
};

export default Header;