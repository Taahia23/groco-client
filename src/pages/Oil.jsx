import  { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import Container from '../components/Container';
import { Link } from 'react-router-dom';

const Oil = () => {
    const [oilItem, setOilItem] = useState([])


    useEffect(()=>{
        fetch('dummyData.json')
        .then(res => res.json())
        .then(data => {
            const fish = data.filter(item => item.category === 'oil')
            setOilItem(fish)
        })
    }, [])

    return (
        <Container>
            <div>
                <h1 className="text-center text-6xl font-bold my-20">Oil Items</h1>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-32">
            {
                oilItem.map(item => <ProductItem 

                key={item._id} 
                item = {item}>

                </ProductItem>)
            }
           </div>
        </div>
       <div className="flex justify-center my-20">
       <Link to={'/'}><button className="bg-[#C2E1C2] text-black btn btn-wide " > Back to Home</button></Link>
       </div>
        </Container>
    );
};

export default Oil;