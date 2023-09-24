import { SirajSvg } from "assets/svg";
import RoundBtn from "components/buttons/round-btn";
import React from "react";
import Menu from "./sub-components/menu";
import SideMenu from "./sub-components/side-menu";
import AuthUserManage from "./sub-components/auth-user-manage";
import { useNavigate } from "react-router-dom";
import PeopleFind from "./sub-components/people-find";
import Sender from "./sub-components/sender";
import SingleSenderDetail from "./sub-components/single-sender-detail";
import SingleSenderMessageList from "./sub-components/single-sender-message-list";
import MessageSend from "./sub-components/message-send";

const ChatBox: React.FunctionComponent = () => {

    /**
     * navigation
     */
    const navigate = useNavigate();

    return (<>
        <div className="flex justify-center pt-20">
            <div className="rounded-l-2xl shadow-2xl bg-white p-8 chat-box" >
                <div className="flex flex-row">
                    {/* logo */}
                    <img src={SirajSvg.img} alt={SirajSvg.alt} className="w-16" />
                    <div className="text-purple-800 text-xl ml-3 mt-4"><strong>Siraj Chat Bot</strong></div>
                    {/* ellipsis icon menus  */}
                    <Menu />
                </div>
                {/* side menus dynamically load */}
                <SideMenu />
                <div className="flex justify-center mt-96">
                    {/* post new article or content  */}
                    <RoundBtn name="Twit" type="button" onClick={() => { navigate('/') }} />
                </div>
                <div className="flex flex-row mt-7">
                    {/* authenticated user data manage */}
                    <AuthUserManage />
                </div>

            </div>
            {/* chat box & message related components */}
            <div className="shadow-2xl bg-white pl-8 pb-8 pr-8 chat-box w-6/12 rounded-r-2xl">
                <div className="flex ">
                    <div className=" bg-white pt-8 pr-4 border-r-2">
                        <div className="text-md"><strong>Messages</strong></div>
                        <hr className="mt-9 mb-5" />
                        <div className="relative flex items-center">
                            {/* people find search  */}
                            <PeopleFind />
                        </div>
                        <div className="mt-2 list-box overflow-y-auto">
                            <hr className="mt-4 mb-4" />
                            <div className="pr-4">
                                {/* sender or user list  */}
                                <Sender />
                            </div>
                        </div>
                    </div>
                    <div className="pl-4 bg-white pt-8 w-[34rem]">
                        {/* particular sender detail */}
                        <SingleSenderDetail />

                        <hr className="mt-3 mb-4" />
                        <div className="message-box overflow-y-auto">
                            <div className="flex flex-col pr-4 pl-4 ">
                                {/* single sender message list */}
                                <SingleSenderMessageList />
                            </div>
                        </div>
                        <div className=" flex justify-center mt-6">
                            <hr className="mt-3 mb-3" />
                            {/* message sender */}
                            <MessageSend />
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        <div className="flex text-base font-semibold justify-center mt-7">
            <img src={SirajSvg.img} alt={SirajSvg.alt} className="w-16" />
            <p className="text-white font-sign-in-display text-5xl ml-5">Siraj Chat Bot</p>
        </div>
    </>)
};

export default ChatBox;