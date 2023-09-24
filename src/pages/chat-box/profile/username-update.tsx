import { yupResolver } from "@hookform/resolvers/yup";
import RoundBtn from "components/buttons/round-btn";
import Input from "components/forms/input";
import Label from "components/forms/label";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

type TUsernameUpdateForm = {
    username: string
};

/**
 * @description form validation schema
 */

const schema = yup
    .object({
        username: yup.string().required(),
    }).required()

const UsernameUpdate: React.FunctionComponent = () => {

    /**
     * form handle hooks
     */
    const { register, handleSubmit, formState: { errors } } = useForm<TUsernameUpdateForm>({ resolver: yupResolver(schema) });

    /**
     * @type {TUsernameUpdateForm}
     * @param data 
     * @description submit update username
     */
    const onSubmit: SubmitHandler<TUsernameUpdateForm> = (data) => {
        console.log(data)
    }

    return (<>
        <div className="px-6">
            <p className="text-purple-800 sm:text-sm md:text-2xl font-normal text-center">Update Username</p>
            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label labelName="Username" error={errors.username} customClass="sm:text-sm mt-2 md:text-lg font-semibold font-sign-in-display" />
                    <Input placeholder="Username" name="username" error={errors.username} type='password' register={register} required={true} />
                    <div className="text-center mt-4">
                        <RoundBtn name="Change" type='submit' />
                        {/* <SpinnerBtn/> */}
                    </div>
                </form>
            </div>
        </div>
    </>);
};

export default UsernameUpdate;