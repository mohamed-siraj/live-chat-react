import { SirajSvg } from "assets/svg";
import React from "react";

const ChatBox: React.FunctionComponent = () => {

    return (<>
        <div className="flex justify-center py-48 ">
            <div className="rounded-l-2xl shadow-2xl bg-white p-8 ">
                <div className="flex flex-row">
                    <img src={SirajSvg.img} alt={SirajSvg.alt} className="w-16"/>
                    <div className="text-purple-800 text-xl ml-3 mt-4"><strong>Siraj Chat Bot</strong></div>
                </div>
            </div>
            <div className="shadow-2xl bg-white p-8 ">

            </div>
            <div className="rounded-r-2xl shadow-2xl bg-white p-8 ">

            </div>
        </div>
    </>)
};

export default ChatBox;