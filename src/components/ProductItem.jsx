
const ProductItem = ({ item }) => {

    const { productName, productImage, price, amount } = item
    return (
        <div>
            <div className="card w-60 bg-base-100 shadow-xl">
                <figure><img src={productImage} alt="Shoes" /></figure>
                <div className="card-body bg-[#f5faf5]">
                    <h2 className="card-title">{productName}</h2>
                    <p>{amount}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-block bg-[#01200F] text-white font-semibold text-lg  btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;