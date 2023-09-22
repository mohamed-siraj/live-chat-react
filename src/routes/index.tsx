import {
    createBrowserRouter
} from "react-router-dom";
import ResetPassword from "pages/reset-password";
import NotFound from "pages/404";
import SignIn from "pages/signin";
import SignUp from "pages/signup";
import ForgotPassword from "pages/forgot-password";
import ChatBox from "pages/chat-box";

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
        path: "/siraj-chat-bot",
        element: <ChatBox />
    },
    {
        path: "*",
        element: <NotFound />
    },
]);


export default router;