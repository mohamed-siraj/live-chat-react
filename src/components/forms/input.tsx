import React from "react"

enum EInput {
    text = 'text',
    password = 'password',
    email = 'email',
    number = 'number',
    url = 'url',
    date = 'date',
    datetimeLocal = 'datetime-local',
    month = 'month',
    week = 'week',
    time = 'time',
    search = 'search',
    tel = 'tel',
    checkbox = 'checkbox',
    radio = 'radio'
};

type CEInput = keyof typeof EInput;

type TInput = {
    placeholder: string,
    name: string,
    error: any,
    type: CEInput,
    register: any,
    required: boolean,
    customClass?: string
};

const Input: React.FunctionComponent<TInput> = ({ placeholder, name, error, type, register, customClass, required }) => {

    return (<>
        <input type={type} placeholder={placeholder} {...register(`${name}`, { required: required })} className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-white focus:bg-white ${customClass} ${error ? "text-red-800 border-red-800"
            : "text-purple-800 border-purple-800"}`} />
        {error && (
            <p className="text-red-800 text-xs mt-2">
                {error?.message}.
            </p>
        )}
    </>)

};

export default Input;