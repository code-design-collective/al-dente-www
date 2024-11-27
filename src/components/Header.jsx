import React from 'react'

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='py-[2rem]'>
            <div className="container flex justify-between">
                <Link to="/">
                    <h1 className='text-2xl'>Al Dente</h1>
                </Link>
                {/* <nav className="flex gap-[1rem]">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </nav> */}
            </div >
        </header >
    )
}

export default Header