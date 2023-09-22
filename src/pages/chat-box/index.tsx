import { Email, Profile, User } from "assets/img";
import { SirajSvg } from "assets/svg";
import RoundBtn from "components/buttons/roundBtn";
import React from "react";

const ChatBox: React.FunctionComponent = () => {

    return (<>
        <div className="flex justify-center py-28 ">
            <div className="rounded-l-2xl shadow-2xl bg-white p-8 chat-box" >
                <div className="flex flex-row">
                    <img src={SirajSvg.img} alt={SirajSvg.alt} className="w-16" />
                    <div className="text-purple-800 text-xl ml-3 mt-4"><strong>Siraj Chat Bot</strong></div>
                </div>
                <div className="flex flex-row mt-7">
                    <img src={Email.img} alt={Email.alt} className="w-9 h-9" />
                    <div className="text-md ml-3 mt-1.5"><strong>Messages</strong></div>
                </div>
                <div className="flex flex-row mt-7">
                    <img src={User.img} alt={User.alt} className="w-9 h-9" />
                    <div className="text-md ml-3 mt-1.5"><strong>Profile</strong></div>
                </div>

                <div className="flex justify-center mt-96">
                        <RoundBtn name="Twit" type="button"/>
                </div>
                <div className="flex flex-row mt-7">
                    <img src={Profile.img} alt={Profile.alt} className="w-10 h-10" />
                    <div className="text-md ml-3 mt-1.5">
                        <strong>Mohamed Siraj</strong><br/>
                        <span className="text-md">@amsiraj94@gmail.com</span>
                    </div>
                </div>

            </div>
            <div className="shadow-2xl bg-white p-8 chat-box">

            </div>
            <div className="rounded-r-2xl shadow-2xl bg-white p-8  chat-box">

            </div>
        </div>
    </>)
};

export default ChatBox;