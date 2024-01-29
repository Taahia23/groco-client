
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const total = totalPrice.toFixed(2);
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {

                     
                            if (res.data.deletedCount > 0) {
                                refetch()
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });

                            }


                       
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="text-5xl text-center border-y-4 border-yellow-500 w-72 py-5 my-20 font-semibold">My Cart</h1>
            </div>
            <div className="flex justify-evenly my-10">
                <h1 className="text-4xl"><span className="font-semibold">Total items</span> : {cart.length}</h1>
                <h1 className="text-4xl"><span className="font-semibold">Total price</span> : {total} tk</h1>
                <button className="btn btn-ghost btn-wide font-bold text-xl bg-yellow-200">Pay</button>
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
                            cart.map((item, idx) => <tr key={item._id}>
                                <th>{idx + 1} </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.productImage} alt="" />

                                            </div>
                                        </div>
                                        <div>


                                        </div>
                                    </div>
                                </td>
                                <td> <div className="font-bold">{item.productName}</div></td>
                                <td>
                                    {item.price} tk

                                </td>
                                <td>{item.category}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">
                                        <FaTrashAlt className="text-lg text-red-600"></FaTrashAlt>
                                    </button>
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