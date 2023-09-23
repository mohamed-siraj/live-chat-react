import { Profile } from "assets/img";
import React from "react";

const AuthUserManage: React.FunctionComponent = () => {

    return (<>
        <img src={Profile.img} alt={Profile.alt} className="w-10 h-10" />
        <div className="text-md ml-3">
            <strong>Mohamed Siraj</strong><br />
            <span className="text-md">@amsiraj94</span>
        </div></>)
};

export default AuthUserManage;