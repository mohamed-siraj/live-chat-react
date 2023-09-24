import { Profile } from "assets/img";
import React from "react";
import { senderMessageTemData, TOTHER } from "../temData/sender-message.temData";

const SingleSenderMessageList: React.FunctionComponent = () => {

    return (<>
        {
            senderMessageTemData.map(({ message, other }) => {

                // sender handle
                if (other === TOTHER.SENDER) {
                    return (<>
                        <div className="flex flex-row mt-7 w-5/6">
                            <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                            <div className="text-md ml-3 p-4 bg-blue-400 rounded-xl text-white">
                                {message}
                            </div>
                        </div>
                    </>)
                } else {
                    // handle receiver message 
                    return (<>
                        <div className="self-end">
                            <div className="flex flex-row mt-7">
                                <div className="text-md mr-3 p-4 bg-yellow-400 rounded-xl">
                                    {message}
                                </div>
                                <img src={Profile.img} alt={Profile.alt} className="w-7 h-7" />
                            </div>
                        </div>
                    </>)
                }


            })
        }


    </>);
};

export default SingleSenderMessageList;