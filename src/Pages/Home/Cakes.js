import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';

const Cakes = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const cakes = data.filter(food => food.category.includes('Cakes'));
                setItems(cakes);
            })
    }, []);
    return (
        <div className='my-8'>
            <h1 className='text-center text-3xl font-bold'>Best Selling Cake</h1>
            <div className='w-4/5 my-8 mx-auto grid lg:grid-cols-4 grid-cols-1 gap-4'>
                {
                    items.slice(0, 8).map(food =>
                        <Product key={food._id} product={food}></Product>
                    )
                }
            </div>
        </div>
    );
};

export default Cakes;