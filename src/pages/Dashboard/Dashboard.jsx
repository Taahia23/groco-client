
// import { NavLink } from 'react-router-dom';

import { Link } from "react-router-dom";
import Banner from "../Home/Banner";

const DashBoard = () => {
    return (
        <div className='flex'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                     <Banner></Banner>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                   

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#C2E1C2] text-base-content">
                        {/* Sidebar content here */}
                        <li className="text-lg py-2 font-semibold"><Link >Fish & Meat</Link></li>
                        <li className="text-lg py-2 font-semibold"><Link >Cooking</Link></li>
                        <li className="text-lg py-2 font-semibold"><Link >Beverages
</Link></li>
                        <li className="text-lg py-2 font-semibold"><Link >Home & Cleaning</Link></li>
                        
                    </ul>

                </div>
            </div>
           
        </div>
    );
};

export default DashBoard;