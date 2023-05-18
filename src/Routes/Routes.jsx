import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Registration from "../Pages/Registration/Registration";
import Main from "../Layouts/Main";
import Blog from "../Components/Blog/Blog";

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
        ]
    }
]);

export default router;