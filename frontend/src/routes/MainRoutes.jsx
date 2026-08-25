import React, { lazy, useEffect } from 'react'
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
import VendorProtected from './protected/VendorProtected'
import AdminProtected from './protected/AdminProtected'
import VendorLayout from '../app/layouts/VendorLayout'
import AdminLayout from '../app/layouts/AdminLayout'
const VendorRequestsList = lazy(() => import("../features/admin/ui/pages/VendorRequestsList"));
import Dashboard from '../features/admin/ui/pages/Dashboard'
import VendorsList from '../features/admin/ui/pages/VendorsList'
import UsersList from '../features/admin/ui/pages/UsersList'
import AddProduct from '../features/vendor/ui/pages/AddProduct'
import VendorProducts from '../features/vendor/ui/pages/VendorProducts'
import SingleProductPage from '../features/products/ui/pages/SingleProductPage'
import { api } from '../config/api'

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
    const singleProductLoader = async ({ params }) => {
        const response = await api.get(`/product/${params.productId}`)
        return response.data
    }
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
                        },
                        {
                            path: "product/:productId",
                            element: <SingleProductPage/>,
                            loader: singleProductLoader
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
        },
        // Vender 
        {
            path: '/vendor',
            element: <VendorProtected/>,
            children: [
                {
                    path: "",
                    element: <VendorLayout/>,
                    children: [
                        {
                            path: "add-product",
                            element: <AddProduct/>
                        },
                        {
                            path: "products",
                            element: <VendorProducts/>
                        },
                    ]
                }
            ]
        },

        //Admin
        {
            path:"/admin",
            element:<AdminProtected/>,
            children:[
                {
                    path: "",
                    element: <AdminLayout/>,
                    children: [
                        {
                          path: "",
                          element: <Dashboard/>
                        },
                        {
                            path: "vendor-request",
                            element: <VendorRequestsList/>
                        },
                        {
                            path: "vendors",
                            element: <VendorsList/>
                        },
                        {
                            path: "users",
                            element: <UsersList/>
                        }
                    ]
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default MainRoutes

