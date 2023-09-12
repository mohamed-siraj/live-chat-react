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
}

type CEInput = keyof typeof EInput;

type TInput = {
    placeholder: string,
    name: string,
    error: boolean,
    type: CEInput,
    register: any
}

const Input: React.FunctionComponent<TInput> = ({ placeholder, name, error, type, register }) => {

    return (<>
        <input type={type} placeholder={placeholder} {...register(`${name}`)} className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-purple-500 focus:bg-purple-600 ${error ? "text-red-300 border-red-400"
            : "text-purple-200 border-purple-400"}`} />
        {error && (
            <p className="text-red-500 text-sm mt-2">
                A valid email is required.
            </p>
        )}
    </>)

};

export default Input;