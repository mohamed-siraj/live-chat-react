import {
    createBrowserRouter
} from "react-router-dom";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "pages/reset-password";
import NotFound from "pages/404";

/**
 * create routes
 */
const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <SignIn />
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />
    },
    {
        path: "/reset-password/:id",
        element: <ResetPassword />
    },
    {
        path: "*",
        element: <NotFound />
    },
]);


export default router;