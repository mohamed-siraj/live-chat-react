import { yupResolver } from "@hookform/resolvers/yup";
import RoundBtn from "components/buttons/round-btn";
import Input from "components/forms/input";
import Label from "components/forms/label";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

type TProfileDetailForm = {
    phone: string,
    address: string,
};

/**
 * @description form validation schema
 */

const schema = yup
    .object({
        phone: yup.string().required(),
        address: yup.string().required(),
    }).required()

const ProfileDetail: React.FunctionComponent = () => {

    /**
     * form handle hooks
     */
    const { register, handleSubmit, formState: { errors } } = useForm<TProfileDetailForm>({ resolver: yupResolver(schema) });

    /**
     * @type {TProfileDetailForm}
     * @param data 
     * @description submit profile detail
     */
    const onSubmit: SubmitHandler<TProfileDetailForm> = (data) => {
        console.log(data)
    }

    return (<>
        <div className="px-6">
            <p className="text-purple-800 sm:text-sm md:text-2xl font-normal text-center">Update Profile</p>
            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label labelName="Phone number" error={errors.phone} customClass="sm:text-sm md:text-lg font-semibold font-sign-in-display" />
                    <Input placeholder="Phone number" name="phone" error={errors.phone} type='text' register={register} required={true} />
                    <Label labelName="Address" error={errors.address} customClass="sm:text-sm mt-2 md:text-lg font-semibold font-sign-in-display" />
                    <Input placeholder="Address" name="email" error={errors.address} type='text' register={register} required={true} />
                    <div className="text-center mt-4">
                        <RoundBtn name="Update" type='submit' />
                        {/* <SpinnerBtn/> */}
                    </div>
                </form>
            </div>
        </div>
    </>);
};

export default ProfileDetail;