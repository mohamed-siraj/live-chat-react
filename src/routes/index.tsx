import {
    createBrowserRouter
} from "react-router-dom";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

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
        index: true,
        element: <SignUp />
    },
]);


export default router;