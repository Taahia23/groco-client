import { useContext } from "react";
import '../../CSS/login.css';
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import loginImg from '../../assets/images/banner/login.png'
import SocialLogin from "../../components/SocialLogin";
// import SocialLogin from "./SocialLogin";

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password };
        console.log(user);

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire("User Login successful!");
                navigate(from, { replace: true })
                // navigate('/')
            })
            .then(data => {
                console.log(data);
            })
    }



    return (
        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <div className="text-center md:w-1/2 lg:text-left">
        //             <h1 className="text-5xl font-bold">Login now!</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //         </div>
        //         <div className="card shrink-0  md:w-1/2  max-w-sm shadow-2xl bg-base-100">
        //             <form onSubmit={handleLogin} className="card-body">
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        //                 </div>
        //                 <div className="form-control">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        //                     <label className="label">
        //                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        //                     </label>
        //                 </div>
        //                 <div className="form-control mt-6">

        //                     <input className="btn btn-primary" type="submit" value="Login" />
        //                 </div>
        //             </form>
        //             <p className="p-10">Do not have any account? please <Link className="text-blue-700 font-bold" to={'/signUp'}>Register</Link></p>
        //             {/* <p className="px-10">Sign in With <button className="btn btn-primary text-white">Google</button></p> */}
        //             {/* <SocialLogin></SocialLogin> */}
        //         </div>
        //     </div>
        // </div>

        <div className='flex justify-evenly items-center my-36'>
            <div>
            <div className="box ml-32">
                <form onSubmit={handleLogin} action="">
                    <h2>Sign In</h2>
                    <div className="inputBox">
                        <input type="email" name="email" id="" required />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" id="" required />
                        <span>Enter Password</span>
                        <i></i>
                    </div>
                    <input type="submit" value="Login" />
                    <div className="links">
                        <a href="#">Forget Password?</a>
                        <SocialLogin></SocialLogin>
                        <Link className="text-blue-700 font-bold" to={'/signUp'}>Register</Link>
                    
                    </div>
                     
                </form>
               
            </div>
            
            </div>
            <div>
                <img src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default Login;