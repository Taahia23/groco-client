import { FaHome, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { PiNotebookLight } from "react-icons/pi";
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import useAdmin from "../hooks/useAdmin";

const UserAdminDashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex">
                <div className="w-64 min-h-screen bg-[#ffeaa7]">
                    <ul className="menu p-5 space-y-3">

                        {
                            isAdmin ? <>
                                <li className="text-lg">
                                    <NavLink to={'/dashboard/adminHome'}><FaUser className="mr-2"></FaUser>Admin Profile</NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink to={'/dashboard/cart'}> <FaShoppingCart className="mr-2"></FaShoppingCart> My Cart</NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink to={'/dashboard/addProduct'}> <MdAddShoppingCart className="mr-2" />
                                        Add Product</NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink to={'/dashboard/allUsers'}> <FaUsers className="mr-2"></FaUsers> All users</NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink to={'/dashboard/manageUsers'}><PiNotebookLight className="mr-2" /> Manage users</NavLink>
                                </li>
                            </>
                                :
                                <>
                                    <li className="text-lg">
                                        <NavLink to={'/dashboard/userHome'}><FaUser className="mr-2"></FaUser>User Profile</NavLink>
                                    </li>
                                    <li className="text-lg">
                                        <NavLink to={'/dashboard/cart'}> <FaShoppingCart className="mr-2"></FaShoppingCart> My Cart</NavLink>
                                    </li>
                                    <li className="text-lg">
                                        <NavLink to={'/dashboard/review'}><PiNotebookLight className="mr-2" /> Add Review</NavLink>
                                    </li>
                                </>
                        }
                        <div className="divider divider-neutral"></div>
                        {/* shared nav links */}
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