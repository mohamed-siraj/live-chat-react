import { Email, Profile, User } from "assets/img";
import { SirajSvg } from "assets/svg";
import RoundBtn from "components/buttons/roundBtn";
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from "react";

const ChatBox: React.FunctionComponent = () => {

    return (<>
        <div className="flex justify-center py-28 ">
            <div className="rounded-l-2xl shadow-2xl bg-white p-8 chat-box" >
                <div className="flex flex-row">
                    <img src={SirajSvg.img} alt={SirajSvg.alt} className="w-16" />
                    <div className="text-purple-800 text-xl ml-3 mt-4"><strong>Siraj Chat Bot</strong></div>
                    <EllipsisVerticalIcon className="w-7 ml-5 cursor-pointer" />
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
                    <RoundBtn name="Twit" type="button" />
                </div>
                <div className="flex flex-row mt-7">
                    <img src={Profile.img} alt={Profile.alt} className="w-10 h-10" />
                    <div className="text-md ml-3 mt-1.5">
                        <strong>Mohamed Siraj</strong><br />
                        <span className="text-md">@amsiraj94</span>
                    </div>
                </div>

            </div>
            <div className="shadow-2xl bg-white pl-8 pb-8 pr-8 chat-box w-96 overflow-y-auto">
                <div className="fixed bg-white pt-8">
                    <div className="text-md"><strong>Messages</strong></div>
                    <hr className="mt-9 mb-4" />
                    <div className="relative flex items-center">
                        <MagnifyingGlassIcon className="w-5 h-5 absolute ml-3 text-gray-500 pointer-events-none" />
                        <input placeholder="Find people" autoComplete="off" aria-label="Find people" className="px-10 py-3 font-semibold w-full rounded-2xl border-none ring-2 ring-purple-500 focus:ring-purple-800 focus:ring-2 " />
                    </div>
                </div>
                <hr className="mt-4 mb-4" />
                <div className="mt-44">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((value) => {
                            return (<>
                                <div className="flex flex-row mt-7 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer">
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
            <div className="rounded-r-2xl shadow-2xl bg-white p-8 w-2/6 chat-box overflow-y-auto">
                <div className="text-md">
                    <strong>Mohamed Siraj</strong><br />
                    <span className="text-sm">@amsiraj94</span>
                </div>
                <hr className="mt-3" />
                <div>
                    <div className="flex flex-col">
                        <div className="">
                            <div className="flex flex-row mt-7 w-5/6">
                                <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                                <div className="text-md ml-3 p-4 bg-gray-200 rounded-xl">
                                    Hi Im siraj how are you where are you from 
                                </div>
                            </div>
                        </div>
                        <div className=" self-end ">
                            <div className="flex flex-row mt-7 w-5/6">
                                <div className="text-md ml-3 p-4 bg-gray-200 rounded-xl">
                                    Hi Im siraj how are you where are you from 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
};

export default ChatBox;