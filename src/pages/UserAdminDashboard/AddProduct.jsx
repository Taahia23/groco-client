import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProduct = () => {



    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.productImage[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const productItem = {
                productName: data.productName,
                category: data.category,
                price: parseFloat(data.price),
                email: data.email,
                shortDescription: data.shortDescription,
                productImage: res.data.data.display_url,
            }
            const propertyRes = await axiosSecure.post('/property', productItem)
            console.log(propertyRes.data);
            if (propertyRes.data.insertedId) {
                reset()
                // show success popup
                Swal.fire("Property Added successfully!");
            }
        }
        console.log('with image url', res.data);
    }




    return (
        <div>
           
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category</span>

                        </div>
                        <input {...register("category")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                    </label>

                    <div className="flex gap-5">
                        {/* location */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Location</span>

                            </div>
                            <input {...register("location")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/* location */}
                        {/*  price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">price</span>

                            </div>
                            <input {...register("price")} type="number" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/*  price */}
                    </div>

                    <div className="flex gap-5">
                        {/* agent name */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Agent name</span>

                            </div>
                            <input {...register("agentName")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/* agent name */}
                        {/*  agent email */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">email</span>

                            </div>
                            <input {...register("email")} type="text" placeholder="Type here" className="input input-bordered w-full " />

                        </label>
                        {/*  price */}
                    </div>
                   
                    <div className="form-control w-full ">  <label className="form-control">
                        <div className="label">
                            <span className="label-text">Short Description</span> </div>
                        <textarea  {...register("shortDescription")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label></div>

                    <div className="form-control w-full ">  <input  {...register("productImage")} type="file" className="file-input w-full max-w-xs" /></div>

                    <button className="btn btn-primary btn-wide">Add Product</button>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;