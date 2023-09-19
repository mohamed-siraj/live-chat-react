import RoundBtn from "components/buttons/roundBtn";
import React from "react";
import { Link } from "react-router-dom";


class NotFound extends React.Component {

    render(): React.ReactNode {
        return (<>
            <div className="flex justify-center py-64">
                <div className=" flex flex-col">
                    <p className=" text-center text-9xl text-white font-sign-in-display">Siraj Chat Bot</p>
                    <p className=" text-center text-9xl text-white">404</p>
                    <Link to={'/'} className=" text-center mt-5"> <RoundBtn name="RETURN TO LOGIN" type="button" /> </Link>
                    {/* <Link to={'/siraj-chat-bot'} className=" text-center"> <RoundBtn name="RETURN TO SIRAJ CHAT BOT" type="button" /> </Link> */}
                </div>
            </div>
        </>)
    }
}

export default NotFound