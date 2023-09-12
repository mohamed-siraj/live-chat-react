import React from "react"

type TLabel = {
    labelName: string,
    error: boolean
}

const Label: React.FunctionComponent<TLabel> = ({ labelName, error }) => {

    return (<label
        htmlFor={labelName}
        className={`block font-bold text-sm mb-2 ${error ? "text-red-400" : "text-purple-400"}`}
    >
        {labelName}
    </label>)

};

export default Label;