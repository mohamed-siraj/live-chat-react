import { Profile } from "assets/img";
import { SirajSvg } from "assets/svg";
import RoundBtn from "components/buttons/roundBtn";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from "react";
import Menu from "./sub-components/menu";
import SideMenu from "./sub-components/side-menu";
import AuthUserManage from "./sub-components/auth-user-manage";
import { useNavigate } from "react-router-dom";

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
            <div className="shadow-2xl bg-white pl-8 pb-8 pr-8 chat-box w-6/12 rounded-r-2xl">
                <div className="flex ">
                    <div className=" bg-white pt-8 pr-4 border-r-2">
                        <div className="text-md"><strong>Messages</strong></div>
                        <hr className="mt-9 mb-5" />
                        <div className="relative flex items-center">
                            <MagnifyingGlassIcon className="w-5 h-5 absolute ml-3 text-gray-500 pointer-events-none" />
                            <input placeholder="Find people" autoComplete="off" aria-label="Find people" className="px-10 py-3 font-semibold w-full rounded-3xl border-none ring-2 ring-purple-500 focus:ring-purple-800 focus:ring-2 " />
                        </div>
                        <div className="mt-2 list-box overflow-y-auto">
                            <hr className="mt-4 mb-4" />
                            <div className="pr-4">
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((value) => {
                                        return (<>
                                            <div className="flex flex-row mt-1 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer">
                                                <img src={Profile.img} alt={Profile.alt} className="w-10 h-10" />
                                                <div className="text-md ml-3">
                                                    <strong>Mohamed Siraj {value}</strong> <span className="text-xs ml-3 text-gray-400">@amsiraj94 - 23 oct 2023</span><br />
                                                    <span className="text-xs">Hi, how are you...</span>
                                                </div>
                                            </div>
                                            <hr />
                                        </>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="pl-4 bg-white pt-8 w-[34rem]">
                        <strong className="text-md">Mohamed Siraj</strong><br />
                        <span className="text-sm">@amsiraj94</span>
                        <hr className="mt-3 mb-4" />
                        <div className="message-box overflow-y-auto">
                            <div className="flex flex-col pr-4 pl-4 ">
                                <div className="flex flex-row mt-7 w-5/6">
                                    <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    <div className="text-md ml-3 p-4 bg-gray-200 rounded-xl">
                                        Hi Im siraj how are you where are you from
                                    </div>
                                </div>
                                <div className="self-end">
                                    <div className="flex flex-row mt-7">
                                        <div className="text-md mr-3 p-4 bg-gray-200 rounded-xl">
                                            Hi Im siraj how are you where are you from
                                        </div>
                                        <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-7 w-5/6">
                                    <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    <div className="text-md ml-3 p-4 bg-gray-200 rounded-xl">
                                        Hi Im siraj how are you where are you from
                                    </div>
                                </div>
                                <div className="self-end">
                                    <div className="flex flex-row mt-7">
                                        <div className="text-md mr-3 p-4 bg-gray-200 rounded-xl">
                                            Hi Im siraj how are you where are you from
                                        </div>
                                        <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-7 w-5/6">
                                    <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    <div className="text-md ml-3 p-4 bg-gray-200 rounded-xl">
                                        Hi Im siraj how are you where are you from
                                    </div>
                                </div>
                                <div className="self-end">
                                    <div className="flex flex-row mt-7">
                                        <div className="text-md mr-3 p-4 bg-gray-200 rounded-xl">
                                            Hi Im siraj how are you where are you from
                                        </div>
                                        <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-7 w-5/6">
                                    <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    <div className="text-md ml-3 p-4 bg-gray-200 rounded-xl">
                                        Hi Im siraj how are you where are you from
                                    </div>
                                </div>
                                <div className="self-end">
                                    <div className="flex flex-row mt-7">
                                        <div className="text-md mr-3 p-4 bg-gray-200 rounded-xl">
                                            Hi Im siraj how are you where are you from
                                        </div>
                                        <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-7 w-5/6">
                                    <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    <div className="text-md ml-3 p-4 bg-gray-200 rounded-xl">
                                        Hi Im siraj how are you where are you from
                                    </div>
                                </div>
                                <div className="self-end">
                                    <div className="flex flex-row mt-7">
                                        <div className="text-md mr-3 p-4 bg-gray-200 rounded-xl">
                                            Hi Im siraj how are you where are you from
                                        </div>
                                        <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="flex flex-row mt-7 w-5/6">
                                    <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    <div className="text-md ml-3 p-4 bg-gray-200 rounded-xl">
                                        Hi Im siraj how are you where are you from
                                    </div>
                                </div>
                                <div className="self-end">
                                    <div className="flex flex-row mt-7">
                                        <div className="text-md mr-3 p-4 bg-gray-200 rounded-xl">
                                            Hi Im siraj how are you where are you from
                                        </div>
                                        <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-center mt-6">

                            <hr className="mt-3 mb-3" />
                            <div className="flex items-center">
                                <input placeholder="Write a message...." autoComplete="off" aria-label="Write a message...." className="px-5 py-3 font-semibold w-96 rounded-3xl border-none ring-2 ring-purple-500 focus:ring-purple-800 focus:ring-2 " />
                                <PaperAirplaneIcon className="w-10 h-10 text-purple-700 cursor-pointer ml-5" />
                            </div>
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