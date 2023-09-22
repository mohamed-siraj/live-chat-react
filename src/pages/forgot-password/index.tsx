import React from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import RoundBtn from "components/buttons/roundBtn";
import Input from "components/forms/input";
import Label from "components/forms/label";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { FloraStretchingBallerina } from "assets/svg";

type TForgotPasswordForm = {
    email: string
};

/**
 * @description form validation schema
 */

const schema = yup
    .object({
        email: yup.string().email().required()
    }).required()

const ForgotPassword: React.FunctionComponent = () => {

    /**
     * form handle hooks
     */
    const { register, handleSubmit, formState: { errors } } = useForm<TForgotPasswordForm>({ resolver: yupResolver(schema) });

    /**
     * @type {TForgotPasswordForm}
     * @param data 
     * @description submit user credentials to forgot password 
     */
    const onSubmit: SubmitHandler<TForgotPasswordForm> = (data) => {
        console.log(data)
    }

    return (<div className="flex justify-center py-64 ">
        <div className="rounded-l-2xl shadow-2xl bg-sign-in-purple p-8 ">
            <img src={FloraStretchingBallerina.img} alt={FloraStretchingBallerina.alt} className="w-11/12 ml-3" />
            <div className="text-base text-center">
                <p className="text-white font-sign-in-display">Siraj Chat Bot</p>
            </div>
        </div>
        <div className="bg-[#d1d5db] p-1.5"></div>
        <div className="rounded-r-2xl shadow-2xl bg-white p-8 ">
            <div className="px-6">
                <p className="text-purple-800 sm:text-sm md:text-2xl font-normal text-center">Forgot Password</p>
                <div className="mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Label labelName="Email" error={errors.email} customClass="sm:text-sm md:text-lg font-semibold font-sign-in-display" />
                        <Input placeholder="Email" name="email" error={errors.email} type='email' register={register} required={true} />
                        <div className="text-center mt-4">
                            <RoundBtn name="Send to mail" type='submit' />
                            {/* <SpinnerBtn/> */}
                        </div>
                        <div className="text-center mt-4">
                            <p className="text-purple-700 text-sm">Already have an account.? <Link to={'/'}><span className="font-bold">Login</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>);
};

export default ForgotPassword