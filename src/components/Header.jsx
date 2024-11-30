import React from 'react'
import { useAuth } from '@/contexts/AuthContext';

import { Link } from 'react-router-dom';

const Header = () => {
    const { logOut, isLoggedIn } = useAuth();

    return (
        <header className='py-[2rem]'>
            <div className="container flex justify-between">
                <Link to="/">
                    <h1 className='text-2xl'>Al Dente</h1>
                </Link>
                <nav className="flex gap-[1rem]">
                    {isLoggedIn ? <button onClick={logOut}>Log out</button> : <Link to="/login">Login</Link>}
                    <Link to="/signup">Sign up</Link>
                    <button onClick={logOut}>Log out</button>
                </nav>
            </div >
        </header >
    )
}

export default Header