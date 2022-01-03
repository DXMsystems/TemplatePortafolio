import React from 'react'
import { Outlet, Link } from "react-router-dom"
import Header from '../Components/Header/Header'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout
