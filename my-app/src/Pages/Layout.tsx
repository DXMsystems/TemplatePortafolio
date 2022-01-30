import React from 'react'
import { Outlet, Link } from "react-router-dom"
import Header from '../Components/Header/Header'
import HamburguerMenu from '../Components/HamburguerMenu/HamburguerMenu';

const Layout = () => {
    return (
        <>
            <Header />
            <HamburguerMenu/>
            <Outlet />
        </>
    )
}

export default Layout
