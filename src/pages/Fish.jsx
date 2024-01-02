import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import Container from "../components/Container";


const Fish = () => {
    const [fishItem, setFishItem] = useState([])


    useEffect(()=>{
        fetch('dummyData.json')
        .then(res => res.json())
        .then(data => {
            const fish = data.filter(item => item.category === 'fish')
            setFishItem(fish)
        })
    }, [])

    return (
        <Container>
            <div>
                <h1 className="text-center text-6xl font-bold my-20">Fish Items</h1>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-32">
            {
                fishItem.map(item => <ProductItem 

                key={item._id} 
                item = {item}>

                </ProductItem>)
            }
           </div>
        </div>
        </Container>
    );
};

export default Fish;