import {
    createBrowserRouter
} from "react-router-dom";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import ForgotPassword from "../pages/forgot-password";

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
]);


export default router;