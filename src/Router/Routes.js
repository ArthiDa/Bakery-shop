import React from 'react';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Layout/Dashboard';
import DisplayError from '../Shared/DisplayError';
import AdminRoute from './AdminRoute';
import Overview from '../Pages/Admin/Overview';
import AddProduct from '../Pages/Admin/AddProduct';
import Products from '../Pages/Products/Products';
import AboutUs from '../Pages/AboutUs/AboutUs';
import ManageProducts from '../Pages/Admin/ManageProducts';
import UpdateProduct from '../Pages/Admin/UpdateProduct';
import ViewOrder from '../Pages/Admin/ViewOrder';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            }

            
        ]
    },
    {
        path: '/dashboard',
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path: '/dashboard',
                element: <Overview></Overview>
            },
            {
                path: '/dashboard/addproduct',
                element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
            },
            {
                path: '/dashboard/manageproduct',
                element: <AdminRoute><ManageProducts></ManageProducts></AdminRoute>
            },
            {
                path: '/dashboard/manageproduct/update/:_id',
                element: <AdminRoute><UpdateProduct></UpdateProduct></AdminRoute>
            },
            {
                path: '/dashboard/vieworder',
                element: <AdminRoute><ViewOrder></ViewOrder></AdminRoute>
            }
        ]
    }
])

export default router;