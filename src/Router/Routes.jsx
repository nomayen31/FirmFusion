import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayouts/MainLayout';
import Hero from '../Components/Hero/Hero';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home></Home>,
                loader:() => fetch("/public/companies.json")
            }
        ]
    }
])


export default router;