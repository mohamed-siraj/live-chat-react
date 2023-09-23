import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Label from "components/forms/label";
import Input from "components/forms/input";
import RoundBtn from "components/buttons/roundBtn";
import SpinnerBtn from "components/buttons/spinnerBtn";
import { FloraStretchingBallerina } from "assets/svg";

type TSignInForm = {
    username: string,
    password: string
};

/**
 * @description form validation schema
 */

const schema = yup
    .object({
        username: yup.string().required(),
        password: yup.string().min(6).max(12).required(),
    }).required()


const SignIn: React.FunctionComponent = () => {

    /**
     * navigation
     */
    const navigate = useNavigate();
    /**
     * form handle hooks
     */
    const { register, handleSubmit, formState: { errors } } = useForm<TSignInForm>({ resolver: yupResolver(schema) });

    /**
     * @type {TSignInForm}
     * @param data 
     * @description submit user credentials to login 
     */
    const onSubmit: SubmitHandler<TSignInForm> = (data) => {
        navigate('siraj-chat-bot');
    }

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
                <div className="fixed bg-gradient-to-r from-purple-800 to-blue-500 p-3 -ml-11 rounded-r-3xl">
                    <p className="text-white text-2xl font-semibold font-sign-in-display"> Welcome Back </p>
                </div>
                <div className="mt-24 px-6">
                    <p className="text-purple-800 mt-7 sm:text-sm md:text-2xl font-normal text-center">Login your account</p>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Label labelName="Username" error={errors.username} customClass="sm:text-sm md:text-lg font-semibold font-sign-in-display" />
                            <Input placeholder="Username" name="username" error={errors.username} type='text' register={register} required={true} />
                            <Label labelName="Password" error={errors.password} customClass="sm:text-sm mt-2 md:text-lg font-semibold font-sign-in-display" />
                            <Input placeholder="Password" name="password" error={errors.password} type='password' register={register} required={true} />
                            <div className="text-center mt-4">
                                <RoundBtn name="Login" type='submit' />
                                {/* <SpinnerBtn/> */}
                            </div>
                            <div className="text-center mt-4">
                                <Link to={`/sign-up`}>
                                    <p className="text-purple-700 text-sm cursor-pointer" >Create Account</p>
                                </Link>
                            </div>
                            <div className="text-center mt-4">
                                <Link to={`/forgot-password`}>
                                    <p className="text-purple-700 text-sm underline cursor-pointer">Forgot Password?</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignIn;