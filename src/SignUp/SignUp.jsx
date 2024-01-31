import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../components/SocialLogin";

const SignUp = () => {

    const axiosPublic = useAxiosPublic()

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/'

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user profile info updated');
                                    reset();
                                    Swal.fire("User created successfully!");
                                    navigate(from, { replace: true })
                                }
                            })

                    })
                    .catch(error => console.log(error))

            })
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" required />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" required />
                            {errors.photoURL && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}/ })} name="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span>Password must have 6 character</span>}
                            {errors.password?.type === 'maxLength' && <span>Password must less than 20  character</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase one lower case letter and special  character</span>}
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                         <div>
                            <SocialLogin></SocialLogin>
                         <p className="p-10">Already have any account? please <Link className="text-blue-700 font-bold" to={'/login'}>Login</Link></p>
                         </div>

                    </form>
                   

                </div>
            </div>
        </div>

    );
};

export default SignUp;