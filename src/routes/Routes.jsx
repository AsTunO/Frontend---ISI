// import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom'; // Importe o componente Routes
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import LoginPage from '../pages/loginPage/loginPage.jsx';
import HomePage from '../pages/homePage/homePage.jsx';
import ProfilePage from '../pages/profilePagee/profilePage.jsx';
import NewAdmPage from '../pages/newAdmPage/newAdmPage.jsx';
import ReportsPage from '../pages/reportsPage/reportsPage.jsx';
import LogoutPage from "../pages/logoutPage/LogoutPage.jsx";

import { ProtectedRoute } from './ProtectedRoute.jsx';
import { NotAuthenticatedRoutes } from './NotAuthenticatedRoutes.jsx';

const Routes = () => {
    const publicRoutes = [];
    
    const privateRoutes = [
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/home",
                    element: <HomePage />
                },
                {
                    path: "/profile",
                    element: <ProfilePage />
                },
                {
                    path: "/reports",
                    element: <ReportsPage />
                },
                {
                    path: "/new-adm",
                    element: <NewAdmPage />
                },
                {
                    path: "/logout",
                    element: <LogoutPage />
                }
            ]
        }
    ];

    const notAuthenticatedRoutes = [
        {
            path: "/",
            element: <NotAuthenticatedRoutes />,
            children: [
                {
                    path: "/",
                    element: <LoginPage />,
                },
            ]
        },
      ];
    
    const router = createBrowserRouter([
        ...publicRoutes,
        ...notAuthenticatedRoutes,
        ...privateRoutes
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;
