import React from 'react'
import { useAuth } from '@/contexts/AuthContext';

import { Link } from 'react-router-dom';

const Header = () => {
    const { logOut, isLoggedIn, user } = useAuth();

    return (
        <header className='py-[2rem]'>
            <div className="container flex justify-between">
                <Link to="/">
                    <h1 className='text-2xl'>Al Dente</h1>
                </Link>
                <div className="flex items-center gap-x-[2rem]">
                    {isLoggedIn && <p>{user.email}</p>}
                    <nav className="flex gap-[1rem] items-center">
                        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
                        {isLoggedIn ? <button onClick={logOut}>Log out</button> : <Link to="/login">Login</Link>}
                    </nav>
                </div>
            </div >
        </header >
    )
}

export default Header;
