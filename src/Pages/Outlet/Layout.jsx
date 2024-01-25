import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/NavBar/Navbar'

//O Layout.jsx é o arquivo “principal”, onde podemos colocar tudo que for ser repetido, como navbar, popups, etc.
function Layout() { 
    return (
        <div>
            <Navbar/>
            <Outlet/>
            
        </div>
    )
}

export default Layout