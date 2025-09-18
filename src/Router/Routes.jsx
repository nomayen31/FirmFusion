import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayouts/MainLayout';
import Hero from '../Components/Hero/Hero';

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Hero/>
            }
        ]
    }
])


export default router;