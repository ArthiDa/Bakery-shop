import React, { useEffect, useState } from 'react';
import {motion as m} from 'framer-motion';
import Order from './Order';

const ViewOrder = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    const [detailsOrder,setDetailsOrder] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/order')
        .then((res) => res.json())
        .then((data) => setDetailsOrder(data))
    },[]) 
    // console.log(detailsOrder);
    return (
        <m.div className='grid grid-cols-2 gap-5 w-1/2 mx-auto my-3'>
            {
                detailsOrder.map(order => <Order key={order._id} orderDetails={order.orderDetails[0]} email={order.userEmail}></Order>)
            }
        </m.div>
    );
};

export default ViewOrder;