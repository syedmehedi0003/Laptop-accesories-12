import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let SingInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error || gError) {
        SingInError = <p className="text-red-500 pb-4">{error?.message || gError?.message}</p>
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        console.log(user || gUser);
        navigate(from, { replace: true });

    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);

    };

    return (
        <div className='flex h-screen justify-center items-center'>

            <div className="card w-96 bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email" placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                        // JS only: <p>error message</p> TS only support string
                                    }
                                }
                                )} />

                            <label className="label">
                                {errors.email?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }

                                {errors.email?.type === 'pattern' &&
                                    <span className="label-text-alt text-red-500">{errors.email.message}</span>
                                }
                            </label>
                        </div>

                        {/* //password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password" placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                        // JS only: <p>error message</p> TS only support string
                                    }
                                }
                                )} />

                            <label className="label">
                                {errors.password?.type === 'required' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }

                                {errors.password?.type === 'minLength' &&
                                    <span className="label-text-alt text-red-500">{errors.password.message}</span>
                                }
                            </label>
                        </div>

                        {SingInError}
                        <input type="submit" className="btn btn-primary text-white w-full max-w-xs" value="Login" />

                    </form>

                    <small> <p>New to Doctors Portal <Link className='text-primary font-bold' to="/signup">Create New Account</Link></p></small>
                    <div className="divider">OR</div>

                    <button className="btn btn-outline btn-primary"
                        onClick={() => signInWithGoogle()}>Continue with Google</button>
                </div>
            </div>

        </div>

    );
};

export default Login;