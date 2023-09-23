import React from "react"

enum ERoundBtn {
    submit = 'submit',
    button = 'button'
};

type CERoundBtn = keyof typeof ERoundBtn;

type TRoundBtn = {
    name: string,
    type: CERoundBtn,
    customClass?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};


const RoundBtn: React.FunctionComponent<TRoundBtn> = ({ name, type, customClass, onClick }) => {

    return (<button onClick={onClick} type={type} className={`${customClass} text-white bg-gradient-to-r from-purple-800 to-blue-500 px-12 py-2 rounded-3xl`}>{name}</button>)
};

export default RoundBtn;