import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {

    const {_id, productName, productImage, price, amount } = item
    return (
        <div>
            <div className="card w-60 bg-base-100 shadow-xl">
                <figure><img src={productImage} alt="Shoes" /></figure>
                <div className="card-body bg-[#f5faf5]">
                    <h2 className="card-title">{productName}</h2>
                    <p>{amount}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/detail/${item._id}`}>
                        <button  className="btn btn-block bg-[#01200F] text-white font-semibold text-lg  btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;