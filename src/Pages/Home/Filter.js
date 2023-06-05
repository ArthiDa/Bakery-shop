import React, { useEffect } from 'react';
import "./Filter.css";

const Filter = ({ items, setFiltered, activeCategory, setActiveCategory }) => {
    useEffect(() => {
        if (activeCategory === "All") {
            setFiltered(items);
            return;
        }
        const filtered = items.filter((food) => food.category.includes(activeCategory));
        setFiltered(filtered);
    }, [activeCategory])
    return (
        <div>
            <div className="list-none flex lg:w-1/2 mx-auto justify-evenly lg:text-2xl filter-container text-xl ">
                <button className={activeCategory === 'All' ? 'active' : ''} onClick={() => setActiveCategory('All')}>All</button>
                <button className={activeCategory === 'Cakes' ? 'active' : ''} onClick={() => setActiveCategory("Cakes")}>Cakes</button>
                <button className={activeCategory === 'Cookies' ? 'active' : ''} onClick={() => setActiveCategory("Cookies")}>Cookies</button>
                <button className={activeCategory === 'Breads' ? 'active' : ''} onClick={() => setActiveCategory("Breads")}>Breads</button>
            </div>
        </div>
    );
};

export default Filter;