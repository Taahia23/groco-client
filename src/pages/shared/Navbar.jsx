import { Link } from "react-router-dom";
import huge from '../../assets/images/huge.png'

const Navbar = () => {


    const navItems = <>
        <li className="text-xl hover:text-white"><Link to={'/'}>Home</Link></li>
        <li className="text-xl hover:text-white "><Link to={'/'}>Wishlist</Link></li>
        <li className="text-xl hover:text-white "><Link to={'/'}>About Us</Link></li>
        <li className="text-xl hover:text-white "><Link to={'/'}>Contact</Link></li>
       
        
    </>

    return (
        <div>
            <div className="navbar  bg-[#01200F] text-white px-32 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 ">
                                {navItems}
                        </ul>
                    </div>
                    <img src={huge} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal   px-1">
                      {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'}><button className="btn "><span className="font-semibold">Login</span></button></Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;