import '../../CSS/login.css';
const AboutUs = () => {
    return (
        <div className='flex justify-center items-center my-36'>
            <div className="box">
                <form action="">
                    <h2>Sign In</h2>
                    <div className="inputBox">
                        <input type="text" name="" id="" required />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="" id="" required />
                        <span>Enter Password</span>
                        <i></i>
                    </div>
                    <input type="submit" value="Login" />
                    <div className="links">
                        <a href="#">Forget Password?</a>
                        <a href="#">SignUp</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutUs;