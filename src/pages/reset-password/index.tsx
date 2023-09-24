import React from "react"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import RoundBtn from "components/buttons/round-btn";
import Label from "components/forms/label";
import Input from "components/forms/input";
import { FloraStretchingBallerina } from "assets/svg";

type TResetPasswordForm = {
    password: string,
    confirm_password: string
};

/**
 * @description form validation schema
 */

const schema = yup
    .object({
        password: yup.string().min(6).max(12).required(),
        confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), ''], 'Passwords must match')
    }).required()


const ResetPassword: React.FunctionComponent = () => {

    /**
     * form handle hooks
     */
    const { register, handleSubmit, formState: { errors } } = useForm<TResetPasswordForm>({ resolver: yupResolver(schema) });

    /**
     * @type {TResetPasswordForm}
     * @param data 
     * @description submit user credentials to reset password 
     */
    const onSubmit: SubmitHandler<TResetPasswordForm> = (data) => {
        console.log(data)
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
                    <p className="text-purple-800 mt-7 sm:text-sm md:text-2xl font-normal text-center">Reset Password </p>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Label labelName="Password" error={errors.password} customClass="sm:text-sm mt-2 md:text-lg font-semibold font-sign-in-display" />
                            <Input placeholder="Password" name="password" error={errors.password} type='password' register={register} required={true} />
                            <Label labelName="Confirm password" error={errors.confirm_password} customClass="sm:text-sm mt-2 md:text-lg font-semibold font-sign-in-display" />
                            <Input placeholder="Confirm password" name="confirm_password" error={errors.confirm_password} type='password' register={register} required={true} />
                            <div className="text-center mt-4">
                                <RoundBtn name="Reset" type='submit' />
                                {/* <SpinnerBtn/> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ResetPassword;