import {
    createBrowserRouter
} from "react-router-dom";
import SignIn from "../pages/signin";

/**
 * create routes
 */
const router = createBrowserRouter([
    {
        path: "/",
        index : true,
        element: <SignIn />
    },
]);


export default router;