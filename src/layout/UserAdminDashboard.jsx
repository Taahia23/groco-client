import {  FaHome, FaShoppingCart } from "react-icons/fa";
import { PiNotebookLight } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";

const UserAdminDashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-[#ffeaa7]">
                <ul className="menu p-5 space-y-3">
                    
                    <li className="text-lg">
                        <NavLink to={'/dashboard/userHome'}><FaHome></FaHome> User Profile</NavLink>
                    </li>
                    <li className="text-lg">
                        <NavLink to={'/dashboard/cart'}> <FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                    </li>
                    <li className="text-lg">
                        <NavLink to={'/dashboard/review'}><PiNotebookLight /> Add Review</NavLink>
                    </li>
                    <li> <NavLink to={'/'}></NavLink></li>
                    <li> <NavLink to={'/'}></NavLink></li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserAdminDashboard;