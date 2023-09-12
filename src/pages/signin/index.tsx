import React from "react";
import { FloraStretchingBallerina } from '../../svg';

class SignIn extends React.Component {


    render(): React.ReactNode {
        return (
            <div className="flex justify-center py-64 ">
                <div className="rounded-l-2xl shadow-2xl bg-sign-in-purple p-8 ">
                    <img src={FloraStretchingBallerina.img} alt={FloraStretchingBallerina.alt} className="w-11/12 ml-3" />
                    <div className="text-base text-center">
                        <p className="text-white font-sign-in-display">Siraj Chat Bot</p>
                    </div>
                </div>
                <div className="bg-[#d1d5db] p-1.5"></div>
                <div className="rounded-r-2xl shadow-2xl bg-white p-8 ">
                    <div className=" fixed bg-gradient-to-r from-purple-800 p-3 -ml-11 ">
                        <p className="text-white text-2xl font-semibold font-sign-in-display"> Welcome Back </p>
                    </div>
                </div>
            </div>
        )
    }

};

export default SignIn;