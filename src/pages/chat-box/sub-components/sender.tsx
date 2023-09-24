import { Profile } from "assets/img";
import React from "react";
import senderTemData from "../temData/sender.temData";

const Sender: React.FunctionComponent = () => {

    return (<>
        {
            senderTemData.map(({name, user_name, date, last_message}, index) => {
                return (<>
                    <div className="flex flex-row mt-1 hover:bg-gray-200 hover:rounded-md hover:cursor-pointer h-20" key={index}>
                        <img src={Profile.img} alt={Profile.alt} className="w-10 h-10" />
                        <div className="text-md ml-3">
                            <strong>{name}</strong> <span className="text-xs ml-3 text-gray-400">{user_name} - {date}</span><br />
                            <span className="text-xs">{last_message}...</span>
                        </div>
                    </div>
                    <hr />
                </>)
            })
        }
    </>);
};

export default Sender;