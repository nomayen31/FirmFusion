import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const CompanyLayout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default CompanyLayout;
