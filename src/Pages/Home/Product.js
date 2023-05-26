import React, { useEffect, useState } from 'react';
import Foods from './Foods';

const Product = () => {
    const defaultFoods = [
        {
            id: 1,
            name: "Black Forest - MD",
            category: "Cakes",
            Price: "1520",
            weight: "600gm",
        },
        {
            id: 2,
            name: "Red Velvet Cake",
            category: "Cakes",
            Price: "1550",
            weight: "500gm",
        },
        {
            id: 3,
            name: "Belgian Malted Chocolate",
            category: "Cakes",
            Price: "1950",
            weight: "750gm",
        },
        {
            id: 4,
            name: "Chocolate Fudge Cake",
            category: "Cakes",
            Price: "1945",
            weight: "750gm",
        },
        {
            id: 5,
            name: "Dark Chocolate Biscuit",
            category: "Cookies",
            Price: "1945",
            weight: "750gm",
        },
        {
            id: 6,
            name: "Nutty Almond Tiles",
            category: "Cookies",
            Price: "1945",
            weight: "750gm",
        },
        {
            id: 7,
            name: "Milk Bread",
            category: "Breads",
            Price: "1945",
            weight: "750gm",
        },
        {
            id: 8,
            name: "Potato Bread",
            category: "Breads",
            Price: "1945",
            weight: "750gm",
        },
    ];
    const [items, setItems] = useState([]);
    useEffect(() => {
        const cakes = defaultFoods.filter(food => food.category.includes('Cakes'));
        setItems(cakes);
    }, [])
    return (
        <div className='my-8'>
            <h1 className='text-center text-3xl font-bold'>Best Selling Cake</h1>
            <div className='w-4/5 my-8 mx-auto grid lg:grid-cols-4 grid-cols-1 grid-flow-col gap-4'>
                {
                    items.slice(0, 8).map(food =>
                        <Foods key={food.id} foods={food}></Foods>
                    )
                }
            </div>
        </div>
    );
};

export default Product;