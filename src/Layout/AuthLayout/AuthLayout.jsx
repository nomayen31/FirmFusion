import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 py-2 mx-auto'>
                <NavBar/>
            </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;