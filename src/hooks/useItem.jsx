import { useEffect, useState } from "react";

const useItem = () => {
    const [foodItem, setFoodItem] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        fetch('http://localhost:5000/foodItem')
        .then(res => res.json())
        .then(data => {
            
            setFoodItem(data);
            setLoading(false)
        })
    }, [])
    return [foodItem, loading]
};

export default useItem;