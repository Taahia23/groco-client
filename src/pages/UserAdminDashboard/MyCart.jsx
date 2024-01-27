import { key } from "localforage";
import useCart from "../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <h1 className="text-5xl">My Cart</h1>
            <div className="flex justify-evenly">
                <h1 className="text-4xl">Total items : {cart.length}</h1>
                <h1 className="text-4xl">Total price : {totalPrice} tk</h1>
                <button className="btn btn-ghost">Pay</button>
            </div>

            <div className="overflow-x-auto p-10">
                <table className="table text-lg ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                              #
                            </th>
                            <th>Name</th>
                            
                            <th>price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,idx)  => <tr key={item._id}>
                                <th>{idx+1} </th>
                                {/* <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                               <img src={item.productImage} alt="" />

                                            </div>
                                        </div>
                                        <div>
                                           
                                            
                                        </div>
                                    </div>
                                </td> */}
                                <td> <div className="font-bold">{item.productName}</div></td>
                                <td>
                                    {item.price} tk
                                    
                                </td>
                                <td>{item.category}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;