import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from '../shared/ui/pages/HomePage'
import CartPage from '../shared/ui/pages/CartPage'
import ProductsPage from '../shared/ui/pages/ProductsPage'
import ProtectedRoutes from './protected/ProtectedRoutes'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import PublicRoutes from './protected/PublicRoutes'
import MainLayout from '../app/layouts/Mainlayout'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import AboutPage from '../shared/ui/pages/AboutPage'
import { hydrateUserAction } from '../features/auth/state/authActions'
import { useDispatch } from 'react-redux'
import VendorApplicationForm from '../features/vendor/ui/pages/VendorApplicationFormPage'

const MainRoutes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      (() => {
        try {
          dispatch(hydrateUserAction())
        } catch (error) {
         console.log("error in hydration", error) 
        }
      })()
    }, [])
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
                        },
                        {
                            path: "become-vendor",
                            element: <VendorApplicationForm/>
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

