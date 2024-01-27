import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { PiNotebookLight } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const UserAdminDashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <div className="w-64 min-h-screen bg-[#ffeaa7]">
                    <ul className="menu p-5 space-y-3">

                        <li className="text-lg">
                            <NavLink to={'/dashboard/userHome'}><FaUser className="mr-2"></FaUser>User Profile</NavLink>
                        </li>
                        <li className="text-lg">
                            <NavLink to={'/dashboard/cart'}> <FaShoppingCart className="mr-2"></FaShoppingCart> My Cart</NavLink>
                        </li>
                        <li className="text-lg">
                            <NavLink to={'/dashboard/review'}><PiNotebookLight className="mr-2" /> Add Review</NavLink>
                        </li>
                        <div className="divider divider-neutral"></div>
                        <li className="text-lg">
                            <NavLink to={'/'}><FaHome className="mr-2"></FaHome>Home</NavLink>
                        </li>
                        <li> <NavLink to={'/'}></NavLink></li>

                    </ul>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default UserAdminDashboard;