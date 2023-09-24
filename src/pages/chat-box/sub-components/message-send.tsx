import React from "react";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { ETOTHER, senderMessageTemData } from "../temData/sender-message.temData";

type TMessageSendForm = {
    message: string;
};

const MessageSend: React.FunctionComponent = () => {

    /**
     * form handle hooks
     */
    const { register, handleSubmit, reset } = useForm<TMessageSendForm>();

    /**
     * @type {TSignInForm}
     * @param data 
     * @description submit user credentials to login 
     */
    const onSubmit: SubmitHandler<TMessageSendForm> = ({ message }) => {

        /**
         * data push to message
         */

        const tamData: {
            message: string;
            other: ETOTHER
        } = {
            message: `${message}`,
            other: 'RECEIVER'
        }
        senderMessageTemData.push(tamData)
        reset();
    };

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
                <input placeholder="Write a message...." {...register('message', { required: true })} autoComplete="off" aria-label="Write a message...." className="px-5 py-3 font-semibold w-96 rounded-3xl border-none ring-2 ring-purple-500 focus:ring-purple-800 focus:ring-2 " />
                <PaperAirplaneIcon className="w-10 h-10 text-purple-700 cursor-pointer ml-5" onClick={() => {
                    handleSubmit(onSubmit)();
                }} />
            </div>
        </form>

    </>);
};

export default MessageSend;