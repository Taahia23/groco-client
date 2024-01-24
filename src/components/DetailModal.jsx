import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import ZoomImage from "./Image/ZoomImage";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const DetailModal = () => {
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const axiosSecure = useAxiosSecure()
    const singleFood = useLoaderData();
    const { _id, productName, price, amount, shortDescription, category } = singleFood;

    const handleAddToCart = food => {
        if (user && user.email) {
            // send cart into the wishlist
            // console.log(user.email, food);
            const cartItem = {
                foodId : _id,
                email : user.email,
                productName,
                price,
                amount,
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        title: `${productName} is added`,
                        showClass: {
                          popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                          popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                      });
                      refetch()
                }
                
            })
        }
        else {
            Swal.fire({
                title: "You are not logged in user",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', {state: {from: location}})
                }
            });
        }
    }

    return (
        <div>
            <div key={_id} className="card  bg-base-100 p-24 grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {/* <figure><img className="w-1/3" src={productImage} alt="Movie" /></figure> */}

                <figure>
                    <ZoomImage></ZoomImage>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">{productName}</h2>


                    <p className="flex justify-center items-center">{shortDescription} Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.  </p>
                    {/* <h2 className="card-title text-lg">Cook Email: {user?.email}</h2> */}
                    <h2 className=" text-lg">Amount : <span className="text-blue-700">{amount}</span></h2>
                    <h2 className="card-title text-lg">Price : <span className="text-blue-700"> {price}</span> </h2>
                    <h1 className="card-title text-lg mb-7">Category : <span className=" font-extrabold text-red-700">{category}</span></h1>

                    <div className="card-actions justify-start">
                        <div className="flex gap-5">
                            <Link to={''}>
                                <button className="btn btn-wide font-bold text-lg" onClick={handleAddToCart}>Add to cart</button>
                            </Link>
                            <Link to={''}>
                                <button className="btn btn-wide font-bold text-lg" onClick={() => navigate(-1)}>go back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;