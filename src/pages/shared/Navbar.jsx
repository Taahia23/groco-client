import { Link } from "react-router-dom";
import huge from '../../assets/images/huge.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()


    const navItems = <>
        <li className="text-xl hover:text-white"><Link to={'/'}>Home</Link></li>
        <li className="text-xl hover:text-white"><Link to={'/'}>Dashboard </Link></li>
        <li className="text-xl hover:text-white ">
            <Link to={'/dashboard/cart'}>
                <button className="flex">
                    <FaShoppingCart className="ml-2" />
                    <div className="badge bg-[#C2E1C2] p-3 font-bold ml-2">+{cart.length}</div>
                </button>
            </Link></li>
        <li className="text-xl hover:text-white "><Link to={'/'}>About Us</Link></li>
        <li className="text-xl hover:text-white "><Link to={'/'}>Contact</Link></li>

        {
            user ? <></> : <></>
        }

    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

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
                    {/* <Link to={'/login'}><button className="btn "><span className="font-semibold">Login</span></button></Link> */}

                    {
                        user ? <div className='flex flex-row gap-10'>

                            {/* <img className="rounded" src={user?.photoURL} alt="" /> */}
                            <div className="avatar online">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <div className='py-3'><span>{user?.displayName}</span></div>
                            <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button> </div>
                            :
                            <> <li><Link to={'/login'}>Login</Link></li> </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;