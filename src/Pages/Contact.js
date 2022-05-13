import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../firebaseinit';
const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [user] = useAuthState(auth)

    const onSubmit = async (data) => {
        console.log(data)
    };
    return (
        <div className='bg-zinc-800  max-w-sm  mx-auto shadow-lg rounded-md text-white py-4 mt-20 font-secondary'>
            <h2 className='text-center font-bold text-2xl my-10'>Your Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col '>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-white">Name</span>
                    </label>
                    <input id='name'
                        {...register("name", {
                            required: {
                                value: true,
                                message: "name is required"
                            }
                        })}
                        type="text" name="name" placeholder="Type here" class="input bg-zinc-700 input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name?.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-white">Email</span>
                    </label>
                    <input id='email'
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Give proper Email Address'
                            }
                        })}
                        value={user?.email || ''} readOnly type="email" name="email" placeholder="Type here" class="input bg-zinc-700 input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-white">Your Message</span>
                    </label>
                    <input id='message'
                        {...register("message", {
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                        })}
                        type="text" name="message" placeholder="Type here" class="textarea textarea-secondary bg-zinc-700 w-full max-w-xs" />
                    <label class="label">
                        {errors.text?.type === 'required' && <span class="label-text-alt text-red-500">{errors.text.message}</span>}
                        {errors.text?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.text.message}</span>}
                    </label>
                </div>
                <input type="submit" className='w-full max-w-xs bg-white text-slate-800 font-bold input hover:bg-gradient-to-r from-accent to-neutral hover:text-white' value="Send" />

            </form >
        </div >
    );
};

export default Contact;