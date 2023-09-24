import { yupResolver } from "@hookform/resolvers/yup";
import RoundBtn from "components/buttons/round-btn";
import Input from "components/forms/input";
import Label from "components/forms/label";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

type TUpdatePasswordForm = {
    current_password: string,
    password: string,
    confirm_password: string,
};

/**
 * @description form validation schema
 */

const schema = yup
    .object({
        current_password: yup.string().min(6).max(12).label('Current password').required(),
        password: yup.string().min(6).max(12).required(),
        confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), ''], 'Passwords must match')
    }).required()

const UpdatePassword: React.FunctionComponent = () => {

    /**
     * form handle hooks
     */
    const { register, handleSubmit, formState: { errors } } = useForm<TUpdatePasswordForm>({ resolver: yupResolver(schema) });

    /**
     * @type {TUpdatePasswordForm}
     * @param data 
     * @description submit update password
     */
    const onSubmit: SubmitHandler<TUpdatePasswordForm> = (data) => {
        console.log(data)
    }

    return (<>
        <div className="px-6">
            <p className="text-purple-800 sm:text-sm md:text-2xl font-normal text-center">Reset Password</p>
            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label labelName="Current password" error={errors.current_password} customClass="sm:text-sm mt-2 md:text-lg font-semibold font-sign-in-display" />
                    <Input placeholder="Current password" name="current_password" error={errors.current_password} type='password' register={register} required={true} />
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
    </>);
};

export default UpdatePassword;