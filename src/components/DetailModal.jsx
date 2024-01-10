import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ZoomImage from "./Image/ZoomImage";

const DetailModal = () => {

    const navigate = useNavigate();
    const singleFood = useLoaderData();
    const { _id, productName, price, amount, shortDescription, category } = singleFood;

    return (
        <div>
            <div key={_id} className="card  bg-base-100 shadow-xl p-24 grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {/* <figure><img className="w-1/3" src={productImage} alt="Movie" /></figure> */}

                <figure>
                    <ZoomImage></ZoomImage>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">{productName}</h2>


                    <p className=" my-5">{shortDescription} </p>
                    {/* <h2 className="card-title text-lg">Cook Email: {user?.email}</h2> */}
                    <h2 className="card-title text-lg">Location : <span className="text-blue-700">{amount}</span></h2>
                    <h2 className="card-title text-lg">Agent Name : <span className="text-blue-700"> {price}</span> </h2>
                    <h1 className="card-title text-lg mb-7">Price : <span className="text-3xl font-extrabold text-red-700">{category}</span></h1>

                    <div className="card-actions justify-start">
                       <Link to={''}>
                       <button onClick={() => navigate(-1)}>go back</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;