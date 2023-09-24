import React from "react"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Label from "components/forms/label";
import Input from "components/forms/input";
import RoundBtn from "components/buttons/round-btn";
import { Link } from "react-router-dom";
import { FloraStretchingBallerina } from "assets/svg";

type TSignUpForm = {
    username: string,
    email: string,
    password: string,
    confirm_password: string
};

/**
 * @description form validation schema
 */

const schema = yup
    .object({
        username: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).max(12).required(),
        confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), ''], 'Passwords must match')
    }).required()


const SignUp: React.FunctionComponent = () => {

    /**
     * form handle hooks
     */
    const { register, handleSubmit, formState: { errors } } = useForm<TSignUpForm>({ resolver: yupResolver(schema) });

    /**
     * @type {TSignUpForm}
     * @param data 
     * @description submit user credentials to signUp 
     */
    const onSubmit: SubmitHandler<TSignUpForm> = (data) => {
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
                <div className="px-6">
                    <p className="text-purple-800 sm:text-sm md:text-2xl font-normal text-center">Create Account</p>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Label labelName="Username" error={errors.username} customClass="sm:text-sm md:text-lg font-semibold font-sign-in-display" />
                            <Input placeholder="Username" name="username" error={errors.username} type='text' register={register} required={true} />
                            <Label labelName="Email" error={errors.email} customClass="sm:text-sm mt-2 md:text-lg font-semibold font-sign-in-display" />
                            <Input placeholder="Email" name="email" error={errors.email} type='email' register={register} required={true} />
                            <Label labelName="Password" error={errors.password} customClass="sm:text-sm mt-2 md:text-lg font-semibold font-sign-in-display" />
                            <Input placeholder="Password" name="password" error={errors.password} type='password' register={register} required={true} />
                            <Label labelName="Confirm password" error={errors.confirm_password} customClass="sm:text-sm mt-2 md:text-lg font-semibold font-sign-in-display" />
                            <Input placeholder="Confirm password" name="confirm_password" error={errors.confirm_password} type='password' register={register} required={true} />
                            <div className="text-center mt-4">
                                <RoundBtn name="Create" type='submit' />
                                {/* <SpinnerBtn/> */}
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-purple-700 text-sm">Already have an account.? <Link to={'/'}><span className="font-bold">Login</span></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;