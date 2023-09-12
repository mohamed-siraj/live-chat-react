import React from "react"

type TLabel = {
    labelName: string,
    error: any,
    customClass?: string
};

const Label: React.FunctionComponent<TLabel> = ({ labelName, error, customClass }) => {

    return (<label
        htmlFor={labelName}
        className={`block text-sign-in-purple mb-2 ${customClass} ${error ? "text-red-400" : "text-purple-400"}`}
    >
        {labelName}
    </label>)

};

export default Label;