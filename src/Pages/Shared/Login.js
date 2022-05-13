import React from 'react';
import { useForm } from "react-hook-form";
import { ImFacebook } from "react-icons/im"
import { BsGoogle } from "react-icons/bs"
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);

    if (gUser || emailUser) {
        navigate(from, { replace: true });
    }

    if (gLoading || emailLoading) {
        return <Loading type="spokes" color="red"></Loading>
    }

    let signInError;
    if (gError || emailError) {
        signInError = <p className='text-red-500 font-bold'>{gError?.message || emailError?.message}</p>
    }

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };
    return (
        <div className='bg-zinc-800  max-w-sm  mx-auto shadow-lg rounded-md text-white py-4 mt-20 font-secondary'>
            <h2 className='text-center font-bold text-2xl my-10'>Log in</h2>

            <form onSubmit={handleSubmit(onSubmit)} className=' flex items-center justify-center flex-col '>
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
                        type="email" name="email" placeholder="Type here" class="input bg-zinc-700 input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email?.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-white">Password</span>
                    </label>
                    <input id='password'
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                            minLength: {
                                value: "8",
                                message: 'Password shoule be 8 characters minimum'
                            }
                        })}
                        type="password" name="password" placeholder="Type here" class="input input-bordered bg-zinc-700 w-full max-w-xs" />
                    <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                {signInError}
                <input type="submit" className='w-full max-w-xs bg-white text-slate-800 font-bold input hover:bg-gradient-to-r from-accent to-neutral hover:text-white' value="Log in" />
                <p className='mt-3'>New to SkyBee ? <Link className='text-blue-500 font-bold' to="/signup">Register First</Link></p>
            </form>
            <div class="divider bg-zinc-800">OR</div>
            <div className='flex items-center justify-center gap-4 mb-6'>
                <button onClick={() => signInWithGoogle()} type="text" placeholder="Type here" class="input flex transition-all duration-500 items-center justify-center gap-4 bg-zinc-700  max-w-xs w-36 hover:bg-gradient-to-r from-accent to-neutral">
                    <BsGoogle />  Google
                </button>
                <button type="text" placeholder="Type here" class="input flex transition-all duration-500 items-center justify-center gap-4 bg-zinc-700 max-w-xs w-36 hover:bg-gradient-to-r from-accent to-neutral">
                    <ImFacebook />   Facebook
                </button>
            </div>

        </div>
    );
};

export default Login;