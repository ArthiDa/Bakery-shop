import React, { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';

const Overview = () => {
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/details')
        .then(res => res.json())
        .then(data=> setDetails(data));
    },[])
    
    return (
        <m.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        exit={{ opacity: 0 }} className='mx-auto w-1/2 my-5 grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className="">
                <h1 className='text-center font-extrabold text-2xl rounded-lg drop-shadow-md tracking-wider p-5 bg-slate-400 text-white'>Users: {details.totalUsers}</h1>
            </div>
            <div>
                <h1 className='text-center font-extrabold text-2xl rounded-lg drop-shadow-md tracking-wider p-5 bg-slate-400 text-white'>Products: {details.totalProducts}</h1>
            </div>
            <div>
                <h1 className='text-center font-extrabold text-2xl rounded-lg drop-shadow-md tracking-wider p-5 bg-slate-400 text-white'>Orders: {details.totalOrders}</h1>
            </div>
        </m.div>
    );
};

export default Overview;