import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from '../pages/HomePage'
import MainLayout from '../layout/MainLayout'
import AboutPage from '../pages/AboutPage'
import CartPage from '../pages/CartPage'
import ProductsPage from '../pages/ProductsPage'
import ProtectedRoutes from './ProtectedRoutes'
import LoginPage from '../pages/LoginPage'
import PublicRoutes from './PublicRoutes'
import RegisterPage from '../pages/RegisterPage'

const MainRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <ProtectedRoutes/>,
            children: [
                {
                    path: "",
                    element: <MainLayout/>,
                    children: [
                        {
                            path: "",
                            element: <HomePage/>
                        },
                        {
                            path: "about",
                            element: <AboutPage/>
                        },
                        {
                            path: "cart",
                            element: <CartPage/>
                        },
                        {
                            path: "products",
                            element: <ProductsPage/>
                        }
                    ]
                }
            ]
        },
        {
            path: "/auth",
            element: <PublicRoutes/>,
            children: [
                {
                    path: "",
                    element: <LoginPage/>
                },
                {
                    path: "register",
                    element: <RegisterPage/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default MainRoutes

