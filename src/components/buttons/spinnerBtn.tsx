import React from "react";
import { SixDotsScaleMiddle } from "react-svg-spinners";

type TRoundBtn = {
    customClass?: string
};


const SpinnerBtn: React.FunctionComponent<TRoundBtn> = ({ customClass }) => {
    return (<button type={`button`} className={`${customClass} text-white bg-gradient-to-r from-purple-800 to-blue-500 px-12 py-2 rounded-3xl`}>
        <SixDotsScaleMiddle color="#FFFFFF"/>
    </button>)
};

export default SpinnerBtn;