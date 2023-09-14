import React from "react"

type TLabel = {
    labelName: string,
    error: any,
    customClass?: string
};

const Label: React.FunctionComponent<TLabel> = ({ labelName, error, customClass }) => {

    return (<label
        className={`block ${customClass} ${error ? "text-red-800" : "text-purple-800"}`}
    >
        {labelName}
    </label>)

};

export default Label;