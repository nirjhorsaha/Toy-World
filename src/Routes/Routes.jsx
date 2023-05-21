import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Registration from "../Pages/Registration/Registration";
import Main from "../Layouts/Main";
import Blog from "../Components/Blog/Blog";
import AllToys from "../Components/AllToys/AllToys";
import AddToys from "../Components/AddToys/AddToys";
import MyToys from "../Components/MyToys/MyToys";
import SingleToyDetails from "../Components/SingleToyDetails/SingleToyDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateToyDetails from "../Components/UpdateToyDetails/UpdateToyDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <SignIn/>
            },
            {
                path: '/signup',
                element: <Registration />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/alltoys',
                element: <AllToys />
            },
            {
                path: '/addtoys',
                element: <AddToys />
            },
            {
                path: '/mytoys',
                element: <MyToys/>
            },
            {
                path: '/:id',
                element: <PrivateRoute><SingleToyDetails /></PrivateRoute>
            },
            {
                path: '/mytoys/updateToy/:id',
                element: <UpdateToyDetails/>
            }
            
        ]
    }
]);

export default router;